import Link from "next/link"
import { ArrowRight, CheckCircle2, Sparkles, Briefcase, Users, Heart, Target } from "lucide-react"
import Image from 'next/image';

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">what-next.me</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#services" className="text-sm font-medium hover:text-primary">
              Servicii
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-primary">
              Testimoniale
            </Link>
            <Link href="#pricing" className="text-sm font-medium hover:text-primary">
              Prețuri
            </Link>
            <Link href="#faq" className="text-sm font-medium hover:text-primary">
              FAQ
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button asChild>
              <Link href="/login">Începe Acum</Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-[#E8F5E9] to-white dark:from-[#1E3A1E] dark:to-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  Coaching AI Personalizat
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Descoperă Următorul Tău Pas cu <span className="text-primary whitespace-nowrap">what-next.me</span>
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Consiliere instantă în carieră, relații, parenting și obiective personale. Discută cu AI-ul nostru antrenat să te ajute, fără judecăți.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg" className="gap-1">
                    <Link href="/">Începe Călătoria</Link>
                  </Button>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>Fără card de credit</span>
                  <CheckCircle2 className="ml-2 h-4 w-4 text-primary" />
                  <span>7 zile gratuit</span>
                </div>
              </div>
              <div className="flex justify-center lg:justify-end">
                <div className="relative w-full max-w-[500px] aspect-video rounded-lg overflow-hidden shadow-xl">
                  <Image src="/hero-image.png" alt="" width={500} height={300} className="object-cover w-full h-full" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="bg-muted/50 py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Servicii</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Cum Te Putem Ajuta</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Platforma noastră oferă coaching personalizat în patru domenii esențiale pentru dezvoltarea ta.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2">
              <Card className="border-0 shadow-md">
                <CardHeader>
                  <Briefcase className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Carieră</CardTitle>
                  <CardDescription>Dezvoltă-ți parcursul profesional</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>Optimizare CV și scrisori de intenție</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>Pregătire pentru interviuri</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>Strategii pentru schimbări de job</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-md">
                <CardHeader>
                  <Users className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Parenting</CardTitle>
                  <CardDescription>Relații armonioase cu copiii tăi</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>Stiluri parentale adaptate nevoilor copilului</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>Tehnici de comunicare eficientă</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>Metode de disciplină pozitivă</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-md">
                <CardHeader>
                  <Heart className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Relații</CardTitle>
                  <CardDescription>Îmbunătățește conexiunile importante</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>Înțelegerea dinamicilor de cuplu</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>Gestionarea conflictelor</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>Dezvoltarea empatiei și comunicării</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-md">
                <CardHeader>
                  <Target className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Obiective Personale</CardTitle>
                  <CardDescription>Atinge-ți potențialul maxim</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>Crearea planurilor SMART</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>Tehnici de motivație și consistență</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>Monitorizarea progresului</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Procesul</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Cum Funcționează</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Platforma noastră AI te ghidează pas cu pas spre atingerea obiectivelor tale.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-3">
              {[
                {
                  step: "1",
                  title: "Evaluare Inițială",
                  description:
                    "Evaluare inițială  - Scrie ce te preocupă. Descrie exact cum ai vorbi cu un prieten de încredere.",
                },
                {
                  step: "2",
                  title: "Răspuns instant",
                  description:
                    "Vei primi un răspuns detaliat, bine structurat și adaptat situației tale. Clar. Aplicabil. Empatic.",
                },
                {
                  step: "3",
                  title: "Plan personalizat",
                  description:
                    "Tu decizi frecvența, momentul și durata sesiunilor interactive de coaching cu AI-ul nostru.",
                },
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                    {item.step}
                  </div>
                  <h3 className="mt-4 text-xl font-bold">{item.title}</h3>
                  <p className="mt-2 text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="bg-muted/50 py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Testimoniale</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Experiențe de Succes</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Descoperă cum what-next.me a transformat viețile utilizatorilor noștri.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Maria Popescu",
                  role: "Manager de Marketing",
                  content:
                    "Cu ajutorul what-next.me am reușit să-mi optimizez CV-ul și să mă pregătesc pentru interviuri, ceea ce m-a ajutat să obțin o promovare mult dorită.",
                  avatar: "/testimonial-1.jpg",
                },
                {
                  name: "Andrei Ionescu",
                  role: "Părinte a doi copii",
                  content:
                    "Sfaturile de parenting au fost revelatorii. Am învățat tehnici de disciplină pozitivă care au îmbunătățit semnificativ relația cu copiii mei.",
                  avatar: "/testimonial-2.jpg",
                },
                {
                  name: "Elena Dumitrescu",
                  role: "Antreprenor",
                  content:
                    "Planurile SMART și tehnicile de motivație m-au ajutat să-mi lansez afacerea și să rămân concentrată pe obiective chiar și în momentele dificile.",
                  avatar: "/testimonial-3.jpg",
                },
              ].map((testimonial, index) => (
                <Card key={index} className="border-0 shadow-md">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <img
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="h-12 w-12 rounded-full object-cover"
                      />
                      <div>
                        <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                        <CardDescription>{testimonial.role}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">"{testimonial.content}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Prețuri</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Alege Planul Tău</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Prețuri transparente pentru a-ți susține călătoria de dezvoltare personală.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
              {[
                {
                  title: "Basic",
                  price: "€9.99",
                  description: "Perfect pentru începători",
                  features: [
                    "Coaching AI de bază",
                    "Un domeniu la alegere",
                    "Rapoarte săptămânale",
                    "Suport prin email",
                  ],
                  cta: "Începe Acum",
                },
                {
                  title: "Premium",
                  price: "€19.99",
                  description: "Cea mai populară alegere",
                  features: [
                    "Coaching AI avansat",
                    "Acces la toate domeniile",
                    "Check-in-uri zilnice",
                    "Suport prioritar",
                    "Planuri personalizate",
                  ],
                  cta: "Începe Acum",
                  highlighted: true,
                },
                {
                  title: "Business",
                  price: "€49.99",
                  description: "Pentru echipe și organizații",
                  features: [
                    "Coaching pentru echipe",
                    "Dashboard administrativ",
                    "Acces API",
                    "Manager de cont dedicat",
                    "Integrări personalizate",
                    "Analize pentru echipă",
                  ],
                  cta: "Contactează-ne",
                },
              ].map((plan, index) => (
                <Card key={index} className={`border-0 shadow-md ${plan.highlighted ? "ring-2 ring-primary" : ""}`}>
                  <CardHeader>
                    <CardTitle>{plan.title}</CardTitle>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-bold">{plan.price}</span>
                      <span className="text-muted-foreground">/lună</span>
                    </div>
                    <CardDescription>{plan.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" variant={plan.highlighted ? "default" : "outline"}>
                      <Link href="/login">{plan.cta}</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="bg-muted/50 py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">FAQ</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Întrebări Frecvente</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Găsește răspunsuri la întrebările comune despre what-next.me.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl space-y-4 py-12">
              {[
                {
                  question: "Cum se compară coaching-ul AI cu cel uman?",
                  answer:
                    "Coaching-ul AI oferă disponibilitate 24/7, metodologie consistentă și analize bazate pe date. Deși nu înlocuiește complet conexiunea umană, AI-ul nostru este proiectat să ofere îndrumare personalizată care se adaptează nevoilor și stilului tău de învățare.",
                },
                {
                  question: "Sunt datele mele în siguranță cu what-next.me?",
                  answer:
                    "Absolut. Folosim criptare de nivel enterprise și respectăm protocoale stricte de confidențialitate. Datele tale personale nu sunt niciodată vândute terților, iar tu păstrezi proprietatea asupra tuturor informațiilor tale.",
                },
                {
                  question: "Pot anula abonamentul oricând?",
                  answer:
                    "Da, poți anula abonamentul în orice moment, fără întrebări. Oferim o perioadă de probă gratuită de 7 zile pentru a experimenta beneficiile what-next.me înainte de a te angaja.",
                },
                {
                  question: "Ce fel de rezultate pot aștepta?",
                  answer:
                    "Rezultatele variază în funcție de obiectivele și angajamentul individual. Majoritatea utilizatorilor raportează progrese semnificative în 4-6 săptămâni de utilizare constantă a platformei. Dashboard-ul nostru de analiză te ajută să urmărești îmbunătățirile în timp.",
                },
                {
                  question: "Oferiți suport pentru echipe sau organizații?",
                  answer:
                    "Da, planul nostru Business este special conceput pentru echipe și organizații. Include funcții precum analize de echipă, dashboard-uri administrative și integrări personalizate pentru a sprijini coaching-ul și dezvoltarea în grup.",
                },
              ].map((faq, index) => (
                <Card key={index} className="border-0 shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-lg">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="get-started" className="bg-[#4CAF50] text-white py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Gata să-ți Transformi Viața?
                </h2>
                <p className="max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Alătură-te miilor de persoane care și-au accelerat dezvoltarea personală cu what-next.me.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg" variant="secondary" className="gap-1 bg-white text-[#4CAF50] hover:bg-[#E8F5E9]">
                  <Link href="/">Începe Perioada Gratuită <ArrowRight className="h-4 w-4" /></Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-white border-white/20 hover:bg-white/10"
                >
                  <Link href="/register">Programează Demo</Link>
                </Button>
              </div>
              <p className="text-sm text-white/80">Fără card de credit. 7 zile gratuit.</p>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-10">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-primary" />
            <span className="text-lg font-bold">what-next.me</span>
          </div>
          <p className="text-center text-sm text-muted-foreground md:text-left">
            © 2025 what-next.me. Toate drepturile rezervate.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
              Confidențialitate
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
              Termeni
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
