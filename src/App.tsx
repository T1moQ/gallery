import './App.css'
import { ModalProvider } from './app/providers/modal-provider'
import { Header } from './widgets/header'
import { Home } from './widgets/home'

function App() {
	return (
		<>
			<ModalProvider>
				<Header />
				<Home />
			</ModalProvider>
		</>
	)
}

export default App
