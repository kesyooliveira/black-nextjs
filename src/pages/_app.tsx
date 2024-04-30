import { CartContextProvider } from '@/hooks/useCart';
import 'bootstrap/dist/css/bootstrap.min.css'
import type { AppProps } from "next/app";

function App({ Component, pageProps }: AppProps) {
  return (
    <CartContextProvider>
      <Component {...pageProps} />
    </CartContextProvider>
  )
}

export default App