import { UserAuthForm } from './components/user-auth-form'

export function SignIn() {

  return (
    <div className="flex h-screen flex-col overflow-hidden bg-white">

      <header className="flex h-[56px] shrink-0 items-center bg-[#2D336B] px-6 z-30">
        <img
          src="/images/Donyati-Logo.png"
          alt="Donyati Logo"
          className="h-6 w-auto object-contain"
        />
      </header>

      <main className="flex flex-1 overflow-hidden">

        <div className="relative hidden lg:flex flex-1 flex-col items-center justify-center bg-white overflow-hidden">

          <div className="absolute inset-0 opacity-[0.4] pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(90deg, #e2e8f0 1px, transparent 1px)`,
              backgroundSize: '40px 40px'
            }}>
          </div>

          <div className="relative z-10 w-full max-w-lg px-12 space-y-8">


            <div className="space-y-6">
              <h2 className="text-6xl font-extrabold tracking-tighter text-[#0F172A] leading-[1.1]">
                Data Recon <br />
                Automation.
              </h2>

              <div className="h-1.5 w-24 bg-slate-300 rounded-full" />

              <p className="text-xl text-slate-500 leading-relaxed font-medium">
                Reconcile two applications and generate reports automatically.
                Bridge the gap between your tech stack with precision.
              </p>
            </div>

            <div className="flex gap-4">
              <span className="rounded-md bg-[#F1F5F9] px-3 py-1.5 text-sm font-semibold text-slate-600">
                Real-time Sync
              </span>
              <span className="rounded-md bg-[#F1F5F9] px-3 py-1.5 text-sm font-semibold text-slate-600">
                AI Reporting
              </span>
            </div>
          </div>
        </div>
    
        <div className="flex flex-1 flex-col overflow-y-auto bg-white border-r border-slate-200">
          <div className="flex flex-col p-8 md:p-12 lg:p-16">


        
            <div className="mx-auto w-full max-w-[400px]">
              <div className="mb-8 space-y-2">
                <h1 className="text-4xl font-bold tracking-tight text-[#0F172A]">Welcome back</h1>
                <p className="text-slate-500 font-medium">
                  Enter your credentials to access your dashboard.
                </p>
              </div>

              <div className="relative">
                <UserAuthForm />
              </div>

              <p className="mt-8 text-center text-sm text-slate-400">
                By clicking continue, you agree to our{" "}
                <a href="#" className="underline underline-offset-4 hover:text-primary transition-colors">
                  Terms of Service
                </a>.
              </p>
            </div>
          </div>
        </div>


      </main>

    
      <footer className="flex h-[48px] shrink-0 items-center bg-[#2D336B] px-6 z-30">
        <p className="text-sm text-white font-medium">
          Copyright © 2022. All rights reserved @Donyati.
        </p>
      </footer>
    </div>
  )
}