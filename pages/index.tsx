import Layout from '../components/Layout'
import UserInput from '../components/UserInput'

export default function Home() {
  return (
    <Layout title="Summon A Succubus">
      <header className="text-center flex items-center space-x-4 justify-center">
        <h1 className="text-white  sm:text-3xl mt-10">
          summon a <p className='font-bold'>SUCCUBUS</p>
        </h1>
      </header>
      <UserInput />
    </Layout>
  );
}
