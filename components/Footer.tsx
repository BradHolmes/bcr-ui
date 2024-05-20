import React from 'react'

interface FooterProps {}

export const BCR_UI_REPO_LINK =
  'https://gitlab.be-md.ncbi.nlm.nih.gov/pd/gdh/gdapi/prototypes/bcr-ui'

export const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="flex flex-col items-center justify-center gap-2 h-18 mt-4 bottom-2">
      <div className="text-center">
        The NCBI Bazel Central Registry is maintained by Brad Holmes.  Contact at #tech-bazel.
      </div>
      <div className="text-center">
        The source of this website can be found in{' '}
        <a
          href={BCR_UI_REPO_LINK}
          className="text-link-color hover:text-link-color-hover"
        >
          this repository
        </a>
        .
      </div>
    </footer>
  )
}
