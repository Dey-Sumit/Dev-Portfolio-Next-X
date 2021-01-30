import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
   render() {
      console.log('document')
      return (
         <Html lang='en'>
            <Head>
               <link rel='preconnect' href='https://fonts.gstatic.com' />
               <link
                  href='https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap'
                  rel='stylesheet'
               />
            </Head>
            <body className='bg-fixed bg-gradient-to-r from-green to-blue-500 dark:from-black-500 dark:to-black-700'>
               <Main />
               <NextScript />
            </body>
         </Html>
      )
   }
}

export default MyDocument
