import { gql, useMutation } from '@apollo/client'
import { Player } from '@lottiefiles/react-lottie-player'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useFilePicker } from 'use-file-picker'
import { Layout } from '../components/shared'

const Dashboard: NextPage = () => {
  const UploadNewLottieMutation = gql`
    mutation Lottie(
      $title: String!
      $description: String
      $assetUrl: String
      $userId: Int
      $file: String!
      $fileName: String!
    ) {
      createLottie(
        title: $title
        description: $description
        assetUrl: $assetUrl
        userId: $userId
        file: $file
        fileName: $fileName
      ) {
        title
      }
    }
  `
  const [uploadHook] = useMutation(UploadNewLottieMutation)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const router = useRouter()
  const [openFileSelector, { filesContent }] = useFilePicker({
    accept: '.json',
    multiple: false,
  })

  const handleClick = () => {
    if (filesContent.length > 0) {
      uploadHook({
        variables: {
          title: title,
          description: description,
          file: window.btoa(filesContent[0].content),
          fileName: filesContent[0].name,
        },
      }).then((res) => {
        if (!res.errors) router.push('/browse')
      })
    } else {
      openFileSelector()
    }
  }

  return (
    <Layout>
      <Head>
        <title>Dashboard</title>
      </Head>
      <div className="grid h-screen grid-cols-6 items-center">
        <div className="col-span-1 col-start-3">
          <Player
            autoplay
            loop
            src="https://assets8.lottiefiles.com/packages/lf20_kwi9lo1z.json"
          ></Player>
        </div>
        <div className="col-span-3">
          <div>
            <p className="text-2xl">Publish your first public animation</p>
            <p className="text-md">
              Show off your animation skills to the LottieFiles community
            </p>
            <button
              onClick={handleClick}
              className="mt-5 inline-block rounded-md bg-lf-teal py-4 px-6 text-white hover:bg-lf-teal-600"
            >
              {filesContent.length > 0
                ? `Upload Animation`
                : `Choose file to upload`}
            </button>
            <form
              className={`mt-5 transition-all ${
                filesContent.length > 0 ? 'show' : 'hidden'
              }`}
            >
              <div className="p-4">
                <label
                  className="inline-block w-1/6 text-lf-grey-dark"
                  htmlFor="title"
                >
                  Title
                </label>
                <input
                  className="w-1/3 rounded-md border border-lf-grey p-2"
                  name="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                />
              </div>
              <div className="p-4">
                <label
                  className="inline-block w-1/6 text-lf-grey-dark"
                  htmlFor="description"
                >
                  Description
                </label>
                <input
                  className="w-1/3 rounded-md border border-lf-grey p-2"
                  name="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  type="text"
                />
              </div>
            </form>
            {filesContent.map((file, index) => (
              <div key={index}>
                <span className="mt-5 inline-block rounded-full bg-teal-50 px-6 py-3 text-sm">
                  {file.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Dashboard
