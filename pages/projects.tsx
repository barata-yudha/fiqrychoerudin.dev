import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import githubData from '@/data/githubData'
import Card from '@/components/Card'
import { PageSEO } from '@/components/SEO'

export default function Projects() {
  return (
    <>
      <PageSEO title={`Projects - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
            <span role="img" className="mr-4" aria-label="wave">
              🚧
            </span>
            Projects
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">Showcase my project.</p>
        </div>
        <div className="container py-5">
          <div className="flex flex-wrap -m-4">
            {projectsData.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
                tag={d.tag}
              />
            ))}
          </div>
        </div>
        <div className="container py-5">
          <div className="pt-6 pb-8 space-y-2 md:space-y-5">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
              <span role="img" className="mr-4" aria-label="wave">
                📦️
              </span>
              Github Project
            </h1>
            <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
              Showcase my github project.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            {githubData.map((d) => {
              console.log(`ini adalah tag ${typeof d.tag}`)
              return (
                <Card
                  key={d.title}
                  title={d.title}
                  description={d.description}
                  imgSrc={d.imgSrc}
                  href={d.href}
                  tag={d.tag}
                />
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}
