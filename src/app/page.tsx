import { Hero } from '@/components/Hero';
import { PromoBanner } from '@/components/PromoBanner';
import { PizzaGrid } from '@/components/PizzaGrid';
import { WhatsAppSection } from '@/components/WhatsAppSection';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { MenuData } from '@/types/menu';

async function getMenuData(): Promise<MenuData> {
  // In a real app, this would fetch from an API
  // For now, we'll import the JSON file
  const menuData = await import('../../public/carta.json');
  return menuData.default;
}

export default async function Home() {
  const menuData = await getMenuData();
  const pizzas = menuData.categories.find(cat => cat.id === 'pizzas')?.items || [];

  return (
    <main className="min-h-screen">
      <Hero />
      <PromoBanner />
      <PizzaGrid pizzas={pizzas} />
      <WhatsAppSection />
      <FloatingWhatsApp />
    </main>
  );
}
