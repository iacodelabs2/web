import Link from "next/link"
import { ProjectsManager } from "@/components/projects-manager"
import { ProjectsShowcase } from "@/components/projects-showcase"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Lightbulb, Rocket } from "lucide-react"

interface LandingPageContent {
  header_logo_text: string
  hero_title: string
  hero_subtitle: string
  hero_button1_text: string
  hero_button2_text: string
  hero_image_url: string
  hero_gradient_from: string
  hero_gradient_to: string
  hero_text_color: string
  features_title: string
  feature1_title: string
  feature1_description: string
  feature2_title: string
  feature2_description: string
  feature3_title: string
  feature3_description: string
  about_section_title: string
  about_us_content: string
  contact_section_title: string
  contact_section_description: string
  contact_button_text: string
  contact_email: string
  footer_text: string
}

interface LandingPagePreviewProps {
  siteContent: LandingPageContent
}

export function LandingPagePreview({ siteContent }: LandingPagePreviewProps) {
  return (
    <div className="flex min-h-screen flex-col bg-[#009FCC] text-white">
      <header className="container mx-auto px-4 py-6 bg-[#009FCC]">
        <div className="flex items-center justify-between w-full">
          <div className="text-2xl font-bold text-white flex-shrink-0">{siteContent.header_logo_text}</div>
          <nav className="flex-1 flex justify-center">
            <ul className="flex space-x-6">
              <li>
                <Link
                  className={`text-white hover:text-white${typeof window !== 'undefined' && window.location.hash === '#features' ? ' font-bold underline' : ''}`}
                  href="#features"
                >
                  Recursos
                </Link>
              </li>
              <li>
                <Link
                  className={`text-white hover:text-white${typeof window !== 'undefined' && window.location.hash === '#projects' ? ' font-bold underline' : ''}`}
                  href="#projects"
                >
                  Projetos
                </Link>
              </li>
              <li>
                <Link
                  className={`text-white hover:text-white${typeof window !== 'undefined' && window.location.hash === '#about' ? ' font-bold underline' : ''}`}
                  href="#about"
                >
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link
                  className={`text-white hover:text-white${typeof window !== 'undefined' && window.location.hash === '#contact' ? ' font-bold underline' : ''}`}
                  href="#contact"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex-shrink-0 ml-6">
            <Link href="/auth/login">
              <button className="px-4 py-2 rounded bg-white text-[#009FCC] font-semibold hover:bg-white transition-colors border border-white">
                Login
              </button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Métricas do Dashboard Administrativo */}
        <section className="container mx-auto px-4 py-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card className="bg-[#009FCC] border border-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">Visitas do Site</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-extrabold text-white">2,847</p>
                <p className="text-lg text-white">+12.5% vs mês anterior</p>
              </CardContent>
            </Card>
            <Card className="bg-[#009FCC] border border-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">Contatos Realizados</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-extrabold text-white">156</p>
                <p className="text-lg text-white">+8.2% vs mês anterior</p>
              </CardContent>
            </Card>
            <Card className="bg-[#009FCC] border border-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">Mensagens Chat</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-extrabold text-white">89</p>
                <p className="text-lg text-white">+23.1% vs mês anterior</p>
              </CardContent>
            </Card>
            <Card className="bg-[#009FCC] border border-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">Receita Mensal</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-extrabold text-white">R$ 45.280</p>
              </CardContent>
            </Card>
          </div>
        </section>
        <section
          className="relative flex h-[600px] items-center justify-center overflow-hidden py-20 text-center"
          style={{
            backgroundImage: `linear-gradient(to right, ${siteContent.hero_gradient_from}, ${siteContent.hero_gradient_to})`,
            color: siteContent.hero_text_color,
          }}
        >
          <Image
            src={siteContent.hero_image_url || "/placeholder.svg?height=600&width=1200&query=hero background"}
            alt="Hero Background"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="absolute inset-0 z-0 opacity-30"
          />
          <div className="relative z-10 max-w-4xl px-4">
            <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">{siteContent.hero_title}</h1>
            <p className="mt-6 text-xl">{siteContent.hero_subtitle}</p>
            <div className="mt-10 flex justify-center space-x-4">
              <Button className="bg-[#FFFFFF] px-8 py-3 text-lg font-semibold text-[#009FCC] hover:bg-[#00BFFF]">
                {siteContent.hero_button1_text}
              </Button>
              <Button
                className="border-[#FFFFFF] bg-transparent px-8 py-3 text-lg font-semibold text-[#FFFFFF] hover:bg-[#FFFFFF] hover:text-[#009FCC]"
                variant="outline"
              >
                {siteContent.hero_button2_text}
              </Button>
            </div>
          </div>
        </section>

        <section id="features" className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-12 text-4xl font-bold text-[#FFFFFF]">{siteContent.features_title}</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <Card className="bg-gray-800 text-gray-50 shadow-lg">
                <CardHeader>
                  <Code className="mx-auto mb-4 h-12 w-12 text-blue-400" />
                  <CardTitle className="text-2xl font-semibold">{siteContent.feature1_title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300">{siteContent.feature1_description}</CardDescription>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 text-gray-50 shadow-lg">
                <Lightbulb className="mx-auto mb-4 h-12 w-12 text-yellow-400" />
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold">{siteContent.feature2_title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300">{siteContent.feature2_description}</CardDescription>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 text-gray-50 shadow-lg">
                <Rocket className="mx-auto mb-4 h-12 w-12 text-red-400" />
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold">{siteContent.feature3_title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300">{siteContent.feature3_description}</CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Seção de Projetos Realizados - layout showcase */}
        <ProjectsShowcase />

        <section id="about" className="bg-gray-900 py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-8 text-4xl font-bold text-[#FFFFFF]">{siteContent.about_section_title}</h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-300">{siteContent.about_us_content}</p>
          </div>
        </section>

        <section id="contact" className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-8 text-4xl font-bold text-[#FFFFFF]">{siteContent.contact_section_title}</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-300">{siteContent.contact_section_description}</p>
            <Button className="mt-8 bg-[#FFFFFF] px-8 py-3 text-lg font-semibold text-[#009FCC] hover:bg-[#00BFFF]">
              <Link href={`mailto:${siteContent.contact_email}`}>{siteContent.contact_button_text}</Link>
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 py-8 text-center text-gray-400">
        <div className="container mx-auto px-4">
          <p>{siteContent.footer_text}</p>
        </div>
      </footer>
    </div>
  )
}
