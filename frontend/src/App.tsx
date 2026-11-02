import { useState } from 'react';
import { Header } from './components/Header';
import { HeroRotor } from './components/HeroRotor';
import { ActionTriad } from './components/ActionTriad';
import { ImpactSelector } from './components/ImpactSelector';
import { WaveStats } from './components/WaveStats';
import { FeatureCampaign } from './components/FeatureCampaign';
import { CorporateRSE } from './components/CorporateRSE';
import { NewsPreview } from './components/NewsPreview';
import { GivecloudModal } from './components/GivecloudModal';
import { Footer } from './components/Footer';

export function App() {
  const [donateModalOpen, setDonateModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white text-brand-dark">
      {/* 1. Sticky Header Persistente con Mega-Dropdown */}
      <Header onOpenDonate={() => setDonateModalOpen(true)} />

      {/* 2. Hero Rotor Dinámico con Máscara Institucional (Elimina Banners Apilados) */}
      <main className="flex-1">
        <HeroRotor onOpenDonate={() => setDonateModalOpen(true)} />

        {/* 3. Triada de Acción Directa (Inspirado en Screenshot 5: "What You Can Do") */}
        <ActionTriad onOpenDonate={() => setDonateModalOpen(true)} />

        {/* 4. Selector de Impacto Interactivo (Inspirado en Screenshot 4 y Acuerdos con Elliott) */}
        <ImpactSelector />

        {/* 5. Numeralia con Onda Bicolor y Cifras Gigantes en Amarillo (Inspirado en Screenshot 2) */}
        <WaveStats />

        {/* 6. Campaña Destacada con Contenedor Split y Onda (Inspirado en Screenshot 3) */}
        <FeatureCampaign />

        {/* 7. Portal Empresarial / RSE (Resolviendo el dolor de Elliott) */}
        <CorporateRSE />

        {/* 8. Noticias e Historias de Cambio */}
        <NewsPreview />
      </main>

      {/* 9. Footer Institucional Completo */}
      <Footer />

      {/* 10. Modal Interactivo de Donación con Givecloud Embed */}
      <GivecloudModal 
        isOpen={donateModalOpen} 
        onClose={() => setDonateModalOpen(false)} 
      />
    </div>
  );
}

export default App;
