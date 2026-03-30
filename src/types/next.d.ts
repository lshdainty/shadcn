// Type declarations for Next.js modules used in example components
// These are stubs to allow TypeScript compilation in a Vite project

declare module "next/image" {
  import { FC, ImgHTMLAttributes } from "react"
  interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    src: string
    alt: string
    width?: number
    height?: number
    fill?: boolean
    priority?: boolean
    quality?: number
    placeholder?: "blur" | "empty"
    blurDataURL?: string
  }
  const Image: FC<ImageProps>
  export default Image
}

declare module "next/link" {
  import { FC, AnchorHTMLAttributes, PropsWithChildren } from "react"
  interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string
    prefetch?: boolean
    replace?: boolean
    scroll?: boolean
  }
  const Link: FC<PropsWithChildren<LinkProps>>
  export default Link
}

declare module "next/form" {
  import { FC, FormHTMLAttributes, PropsWithChildren } from "react"
  interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
    action: string | ((formData: FormData) => void | Promise<void>)
  }
  const Form: FC<PropsWithChildren<FormProps>>
  export default Form
}

declare module "next/font/google" {
  interface FontOptions {
    subsets?: string[]
    weight?: string | string[]
    style?: string | string[]
    display?: string
    variable?: string
  }
  interface FontResult {
    className: string
    style: { fontFamily: string }
    variable: string
  }
  export function Noto_Sans_Arabic(options: FontOptions): FontResult
  export function Inter(options: FontOptions): FontResult
}
