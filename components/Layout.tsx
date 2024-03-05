import Head from 'next/head'

interface LayoutProps {
  children: React.ReactNode
  title: string
}

export default function Layout({ children, title }: LayoutProps) {
  return (
    <div className='wrapper'>
      <Head>
        <title>{title}</title>
      </Head>
      <main className='pt-6'>{children}</main>
    </div>
  )
}
