import ActaForm from '../components/ActaForm'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-indigo-800 mb-2">
            Generador de Actas
          </h1>
          <h2 className="text-xl font-semibold text-indigo-600">
            SisteCam Ver. 3.0 (beta)
          </h2>
        </div>
        <div className="bg-white shadow-2xl rounded-lg overflow-hidden">
          <div className="bg-indigo-600 px-6 py-4">
            <h3 className="text-xl font-semibold text-white">
              Nuevo Acta
            </h3>
          </div>
          <div className="p-6">
            <ActaForm />
          </div>
        </div>
      </div>
    </main>
  )
}

