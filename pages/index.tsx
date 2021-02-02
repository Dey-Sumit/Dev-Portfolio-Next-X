const About = ({ services }) => {
   console.log(services)

   return <div>ABOUT</div>
}

//!called every time  the page refreshed
// export const getServerSideProps = async () => {
//    const res = await fetch('http://localhost:3000/api/services')
//    const data = await res.json()
//    console.log(data)
//    return { props: { services: data.services } }
// }

//!called only during the build of the project
//? make sure the server(localhost:3000)[this will receive the request during build] is running on a terminal during the build
//? also need to change the localhost during the deployment | see the todo

export const getStaticProps = async () => {
   const res = await fetch('http://localhost:3000/api/services')
   const data = await res.json()
   console.log({ STATIC: data })
   return { props: { services: data.services } }
}

export default About
