import React,{useEffect} from 'react';
import { Compass, Eye, HandHeart, Building, Users, Activity, TreePine } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutPage = () => {
  const sections = [
    {
      id: 'mission',
      title: 'OUR MISSION',
      icon: <Compass className="w-12 h-12 text-cyan-500" />,
      content: 'Our mission is to provide our clients with the highest quality products and best service.',
      bgColor: 'bg-blue-50'
    },
    {
      id: 'vision',
      title: 'VISION',
      icon: <Eye className="w-12 h-12 text-cyan-500" />,
      content: 'To grow steadily and be the best transporting company in UAE as measured by the consistency in supply of quality products, best services and financial performance.',
      bgColor: 'bg-purple-50'
    },
    {
      id: 'values',
      title: 'VALUES',
      icon: <HandHeart className="w-12 h-12 text-cyan-500" />,
      content: 'Goals are attained through continuous integrity and reliability, clear and honest attitude of customer satisfaction, openness, ethical accountability of quality and trust.',
      bgColor: 'bg-orange-50'
    },
    {
      id: 'company',
      title: 'OUR COMPANY',
      icon: <Building className="w-12 h-12 text-cyan-500" />,
      content: 'MARJAN AMAN GENERAL TRANSPORT LLC is a UAE company, which incorporated in Dubai on 12th April 2013 under commercial registration # 1118795 (License # 681904) Established on 15th April 2013 And jointly owned by Mr. AYHAN NALBEY (UAE Nationality) and Mr. MARJAN AMAN ULLAH (NO Mr. MUHAMMAD MAJEED E a Pakistani Nationality).',
      bgColor: 'bg-green-50'
    },
    {
      id: 'management',
      title: 'MANAGEMENT',
      icon: <Users className="w-12 h-12 text-cyan-500" />,
      content: 'The business is managed by Mr. Marjan Aman Ullah, a Pakistani national who is the General Manager of the establishment and has 15 years of extensive background in the field trade and transport.',
      bgColor: 'bg-indigo-50'
    },
    {
      id: 'activities',
      title: 'BUSINESS ACTIVITIES',
      icon: <Activity className="w-12 h-12 text-cyan-500" />,
      content: 'MAGT is a Transport company. Although company deals in all types Transportation business our main areas of business are transportation and aggregate supply to construction industry. MAGT (MARJAN AMAN GENERAL TRANSPORT LLC) builds up the proficiency to efficiently develop aggregate operations that provide superior product to the market for the turnkey projects in the primary core and infrastructure sector of UAE industry. Whether your needs fully crushed stone, semi crushed stone road base, natural stone, sand gravel.... etc. MAGT is ready to supply.',
      bgColor: 'bg-yellow-50'
    },
    {
      id: 'resources',
      title: 'RESOURCES',
      icon: <TreePine className="w-12 h-12 text-cyan-500" />,
      content: 'To provide our customers with best quality material only we procure materials only from that crusher which are equipped with latest plant of 1st equipment and have a proven record in production of best quality material following are some of these crushers:',
      bgColor: 'bg-teal-50',
      list: [
        'Haad Crusher - 40 Crusher',
        '40 Musq & Sons - Fujairah',
        '40 Al Qaeem Crusher - Ras Al Khaimah',
        '40 Falion Crusher',
        '40 Falion Crusher',
        '40G Crusher - Jebel',
        '40 Al Watani Crusher - Fujairah',
        '40 Maswad Crusher Plants'
      ]
    }
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <Navbar/>
    <div className="bg-gray-50 min-h-screen">
  {/* Header */}
  <div className="bg-white shadow">
    <div className="max-w-6xl mx-auto px-6 py-10 text-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-1">About Us</h1>
      <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
      <p className="mt-2 text-gray-600 text-sm">Learn more about our company, values, and leadership.</p>
    </div>
  </div>

  {/* Content */}
  <div className="max-w-6xl mx-auto px-6 py-12 space-y-10">

    {sections.map((section, index) => (
      <div key={section.id} className="bg-white rounded-lg p-6 shadow-sm flex flex-col md:flex-row gap-6">
        {/* Icon */}
        <div className="bg-cyan-100 p-4 rounded-md self-start">
          {section.icon}
        </div>

        {/* Text */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">{section.title}</h2>
          <p className="text-gray-600 text-sm mb-3">{section.content}</p>

          {section.list && (
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
              {section.list.map((item, i) => (
                <li key={i}><b>{item}</b></li>
              ))}
            </ul>
          )}
        </div>
      </div>
    ))}

    {/* Conclusion */}
<div className="bg-white rounded-lg p-6 shadow-md flex flex-col md:flex-row justify-between items-start gap-6">
  {/* Text Section */}
  <div className="flex-1 space-y-4">
    <h2 className="text-2xl font-bold text-gray-800">Conclusion</h2>
    <p className="text-sm text-gray-700 leading-relaxed">
      Marjan Aman General Transport LLC is a transparent, professional, and customer-focused company with over 15 years of excellence in the UAE.
    </p>
    <p className="text-sm text-gray-700 leading-relaxed">
      We build long-term relationships through reliability, personalized service, and commitment to our client's needs.
    </p>

    {/* Manager Info Box */}
    <div className="bg-cyan-600 text-white rounded-lg p-4">
      <h3 className="text-lg font-semibold">Mr. Marjan Aman Ullah</h3>
      <p className="text-sm text-cyan-100">General Manager</p>
    </div>
  </div>

  {/* Image Section */}
  <div className="w-full md:w-[120px] flex-shrink-0">
    <img
      src="/images/md (1).jpg"
      alt="Mr. Marjan Aman Ullah"
      className="object-cover w-full h-auto shadow-sm"
    />
  </div>
</div>


  </div>
</div>

    <Footer/>
    </>
  );
};

export default AboutPage;