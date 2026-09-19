import { Card } from '@/components/card';
import { Container } from '@/components/container';
import { CardData } from '@/shared/data/card.data';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Главная',
};
export default function Home() {
  return (
    <>
      <Container className='w-full mt-15 mb-15  bg-linear-30 from-sky-200 via-red-50 to-white p-15 px-10 rounded-3xl'>
        <h1 className="flex justify-center text-sm text-gray-500 font-bold pb-2">GET STARTED</h1>
        <span className="flex justify-center text-black text-3xl pb-10">Make yourself 10x faster designer</span>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {CardData.map((item, key)=>(
            <Card key={key} 
            company={item.company} 
            companya={item.companya}
            title={item.title} 
            text={item.text}
            />
            ))}
        </div>
      </Container>
    </>
  );
}