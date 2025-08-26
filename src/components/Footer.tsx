import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#252525] border-t border-[#252525] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="https://storage.googleapis.com/msgsndr/bwIqmcdNeNlOPKQFF6DF/media/689509b4e6672f35914d3c9a.png" 
                alt="Upscale Logo" 
                className="h-8 w-auto" 
              />
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              A Upscale automatiza a gestão do seu negócio de beleza e bem-estar, 
              permitindo que você foque no que realmente importa: seus clientes e seu crescimento.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="p-2 rounded-full bg-[#333] hover:bg-[#444] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-full bg-[#333] hover:bg-[#444] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-[#e5e5e5]" />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-full bg-[#333] hover:bg-[#444] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-[#e5e5e5]" />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-gray-300 hover:text-primary transition-colors">
                  Funcionalidades
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-300 hover:text-primary transition-colors">
                  Preços
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-300 hover:text-primary transition-colors">
                  Depoimentos
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                  Suporte
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-gray-300" />
                <a 
                  href="mailto:contato@upscale.vu" 
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  contato@upscale.vu
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-gray-300" />
                <a 
                  href="tel:+5511999999999" 
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  (11) 99999-9999
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-gray-300 mt-1" />
                <span className="text-gray-300">
                  São Paulo, SP<br />
                  Brasil
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Linha de Separação */}
        <div className="border-t border-[#252525] mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Upscale. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-300 hover:text-primary text-sm transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-300 hover:text-primary text-sm transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="text-gray-300 hover:text-primary text-sm transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
