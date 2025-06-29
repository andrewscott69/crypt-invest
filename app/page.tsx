import { ArrowRight, Shield, TrendingUp, Users, Globe, Award, BarChart3, Building } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      {/* Header */}
      <header className="border-b border-slate-700 bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-600 rounded-lg flex items-center justify-center">
              <Building className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-xl font-bold">Meridian Capital</span>
              <div className="text-xs text-slate-400">Digital Asset Investment Bank</div>
            </div>
          </div>
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/services" className="text-slate-300 hover:text-white transition-colors">
              Services
            </Link>
            <Link href="/research" className="text-slate-300 hover:text-white transition-colors">
              Research
            </Link>
            <Link href="/markets" className="text-slate-300 hover:text-white transition-colors">
              Markets
            </Link>
            <Link href="/about" className="text-slate-300 hover:text-white transition-colors">
              About
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-white hover:bg-slate-800">
              Client Login
            </Button>
            <Button className="bg-amber-600 hover:bg-amber-700 text-white">Contact Us</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-bold mb-6">
            Institutional
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-600">
              {" "}
              Digital Asset{" "}
            </span>
            Banking
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Premier investment banking services for institutional clients seeking sophisticated cryptocurrency
            investment solutions, risk management, and market intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8">
              Schedule Consultation <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-slate-600 text-white hover:bg-slate-800 bg-transparent"
            >
              View Research
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Institutional Services</h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            Comprehensive digital asset solutions tailored for institutional investors, corporations, and high-net-worth
            individuals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-slate-800 border-slate-700 hover:bg-slate-750 transition-colors">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Asset Management</h3>
              <p className="text-slate-300">
                Sophisticated portfolio management with institutional-grade custody, risk controls, and performance
                optimization.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800 border-slate-700 hover:bg-slate-750 transition-colors">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Trading & Execution</h3>
              <p className="text-slate-300">
                Advanced trading infrastructure with algorithmic execution, dark pools, and institutional liquidity
                access.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800 border-slate-700 hover:bg-slate-750 transition-colors">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Risk Management</h3>
              <p className="text-slate-300">
                Comprehensive risk assessment, hedging strategies, and regulatory compliance for digital assets.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800 border-slate-700 hover:bg-slate-750 transition-colors">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Advisory Services</h3>
              <p className="text-slate-300">
                Strategic consulting for digital asset integration, M&A advisory, and blockchain technology
                implementation.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800 border-slate-700 hover:bg-slate-750 transition-colors">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Market Intelligence</h3>
              <p className="text-slate-300">
                In-depth research, market analysis, and intelligence reports for informed investment decisions.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800 border-slate-700 hover:bg-slate-750 transition-colors">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Prime Brokerage</h3>
              <p className="text-slate-300">
                Comprehensive prime brokerage services including financing, securities lending, and operational support.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-slate-800 py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-amber-500 mb-2">$12.8B+</div>
              <div className="text-slate-300 text-lg">Assets Under Management</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-amber-500 mb-2">850+</div>
              <div className="text-slate-300 text-lg">Institutional Clients</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-amber-500 mb-2">24/7</div>
              <div className="text-slate-300 text-lg">Global Trading Desk</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-amber-500 mb-2">99.98%</div>
              <div className="text-slate-300 text-lg">System Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Ready to Partner With Us?</h2>
          <p className="text-slate-300 mb-8 text-lg">
            Join leading institutions who trust Meridian Capital for their digital asset investment needs.
          </p>
          <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8">
            Schedule a Meeting <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-700 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-amber-500 to-orange-600 rounded-lg flex items-center justify-center">
                  <Building className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-bold">Meridian Capital</span>
              </div>
              <p className="text-slate-400 text-sm">
                Premier digital asset investment bank serving institutional clients globally.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>Asset Management</li>
                <li>Trading & Execution</li>
                <li>Risk Management</li>
                <li>Advisory Services</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>Market Research</li>
                <li>Regulatory Updates</li>
                <li>Educational Content</li>
                <li>API Documentation</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>New York: +1 (212) 555-0100</li>
                <li>London: +44 20 7946 0958</li>
                <li>Singapore: +65 6532 0100</li>
                <li>contact@meridiancapital.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400 text-sm">
            © 2024 Meridian Capital. All rights reserved. | Licensed and regulated by SEC, FCA, and MAS.
          </div>
        </div>
      </footer>
    </div>
  )
}
