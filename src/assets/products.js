const products = [
  {
    id: 1,
    name: "Black Sand",
    image: "https://images.unsplash.com/photo-1547499417-0b7889e0f147?w=500&auto=format&fit=crop&q=60",
    category: "sand",
    description: `
Black sand is a dense, durable material used extensively in construction and infrastructure projects across the UAE. It is primarily used for road base preparation, filling under interlocks, and leveling for slabs due to its compact nature and high weight-bearing capacity. 

In regions like Dubai Industrial City and Abu Dhabi’s Mussafah area, black sand is in high demand for civil engineering works and landscape leveling. Contractors prefer this material for its cost-efficiency and the ease of availability in large volumes. Our supply chain includes high-volume deliveries through tippers and trailers, ensuring timely fulfillment for bulk orders.`
  },
  {
    id: 2,
    name: "White Sand",
    image: "https://plus.unsplash.com/premium_photo-1675864109111-9b0a77c233b6?w=500&auto=format&fit=crop&q=60",
    category: "sand",
    description: `
Marjan Aman General Transport is one of the leading white sand suppliers in Dubai and the UAE. This premium washed sand is silica-based and free from impurities, making it ideal for both residential and commercial use. The fine texture and bright white color give it a clean and polished aesthetic, favored by landscaping companies and beachfront property developers.

White sand is commonly used in playground surfacing, hotel beach profiling, and luxury villa landscaping. In the UAE, it is also used in sand pits, golf courses, and resorts to maintain high hygiene and visual appeal. Our sand is sourced locally from coastal regions across all seven Emirates, ensuring consistent quality and supply.`
  },
  {
    id: 3,
    name: "Dune Sand",
    image: "https://plus.unsplash.com/premium_photo-1700262707010-21ce722c0eac?w=500&auto=format&fit=crop&q=60",
    category: "sand",
    description: `
Dune sand is a naturally fine and dry sand extracted from the deserts of the UAE. It is extensively used in filling applications, especially for pre-construction groundwork, leveling plots, and preparing building foundations.

Due to its loose composition, dune sand is preferred in real estate development zones such as Dubai South, Al Khawaneej, and Ajman Industrial Area. It is suitable for landfills, compaction work, and as a cushioning layer beneath concrete slabs. With a consistent supply and competitive rates, we offer bulk dune sand with quick turnaround delivery.`
  },
  {
    id: 4,
    name: "Stones & Rocks",
    image: "https://images.unsplash.com/photo-1616956099499-9a60ae746fec?w=500&auto=format&fit=crop&q=60",
    category: "stones",
    description: `
Our selection of stones and rocks includes crushed rock, boulders, and decorative stone in various sizes and grades. These materials are used in landscaping, retaining walls, drainage systems, and roadbed preparation. 

We supply construction-grade stones for large-scale infrastructure projects such as roadways, industrial zones, and port expansions in Dubai, Abu Dhabi, and Sharjah. Decorative stones are also popular for high-end villas, resort landscaping, and public park walkways. Our fleet ensures fast delivery throughout the UAE.`
  },
  {
    id: 5,
    name: "Sub Base",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIs0LxCAEB2FOpJC6z9P9S-Q7I327DgOhTqA&s",
    category: "base",
    description: `
Sub base material is a fundamental layer in road construction, parking lots, and foundation prep. Our sub base aggregates meet UAE municipality standards for size, compaction, and load-bearing capacity.

This material is a mix of crushed stone and dust that forms a strong support layer under asphalt or concrete. Engineers and contractors rely on our sub base supplies for projects across Abu Dhabi, Dubai, and Northern Emirates. We offer consistent grading, competitive pricing, and bulk delivery on demand.`
  },
  {
    id: 6,
    name: "Gutch",
    image: "https://dubaiyellowpagesonline.com/userdata/companylogo/products/1471204477.jpg",
    category: "base",
    description: `
Gutch is a coarse granular material often used for ground filling, base preparation, and backfilling works. Its rough texture makes it an excellent filler beneath foundations and structural slabs.

In Dubai and Sharjah, gutch is favored for commercial construction projects, warehouse floors, and utility trench backfills. We supply gutch in various grades and moisture levels to meet project-specific needs. Our transport team ensures same-day dispatch and reliable supply across the Emirates.`
  },
  {
    id: 7,
    name: "Water Tanker",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4LfT3g_oJlGeY6t41QE1lcnUt1eabus3bBA&s",
    category: "services",
    description: `
Our water tanker services provide clean, municipality-approved water to construction sites, gardens, swimming pools, and industrial premises. We offer tankers in various capacities (1000–10,000 gallons) depending on your requirement.

Water is essential for dust suppression, soil compaction, and general cleaning on construction sites. Our fleet operates 24/7 and covers areas including Jebel Ali, Al Quoz, and DIP with GPS-enabled logistics to ensure prompt delivery.`
  },
  {
    id: 8,
    name: "Tipper & Trailer Rental",
    image: "https://rentcotrailers.co.za/wp-content/uploads/2025/01/Side_Tipper.jpg",
    category: "services",
    description: `
We offer tipper trucks and flatbed trailer rentals for transporting sand, gravel, gutch, and heavy equipment. Our fleet includes side tippers, dump trucks, and low beds suitable for all construction logistics.

Whether you’re managing a high-rise in Dubai Marina or a road project in Ras Al Khaimah, our reliable rental service includes skilled drivers and flexible contracts. Daily, weekly, and long-term rentals are available.`
  },
  {
    id: 9,
    name: "Transportation",
    image: "https://plus.unsplash.com/premium_photo-1681487863055-6e87ed3c53b9?w=500&auto=format&fit=crop&q=60",
    category: "services",
    description: `
Our transport service handles bulk delivery of aggregates, building materials, and machinery throughout the UAE. We specialize in fast and safe movement of materials between quarries, supplier yards, and construction sites.

With a fleet of tippers, boom trucks, and trailers, we serve clients from Dubai to Fujairah. Real-time tracking, prompt scheduling, and trained drivers ensure reliability and efficiency.`
  },
  {
    id: 10,
    name: "Landscaping Materials",
    image: "https://www.bayridgelandscaping.com/wp-content/uploads/2019/04/Landscaping-Supplies.png",
    category: "materials",
    description: `
We provide a full range of landscaping materials including mulch, topsoil, compost, decorative pebbles, and artificial turf underlay. All products are sourced and processed locally for quality and consistency.

Our materials are used in villa developments, commercial landscaping, and public parks across UAE. With same-day delivery and installation support, we are a preferred vendor for landscaping contractors and property developers.`
  },
  {
    id: 11,
    name: "White Gravel",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSARXkKsSx898OLE4Jng3QQ_rWmh5PiNhSRkw&s",
    category: "gravel",
    description: `
White gravel is a premium decorative aggregate used for high-end landscaping, garden walkways, and driveways. Its clean and bright appearance adds aesthetic value to modern villas, resorts, and offices.

We offer various sizes from 5mm to 20mm, suitable for ground cover and design elements. All gravel is washed, sieved, and packed for easy installation and long-term use.`
  },
  {
    id: 12,
    name: "Beige Gravel",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_FMt0EpYrvjSxNvt7wNzbLlbjFIQUFJhiVA&s",
    category: "gravel",
    description: `
Beige gravel offers a natural desert look, ideal for water-wise landscaping and decorative pathways. Its warm tone blends well with traditional Middle Eastern architecture and villa compounds.

Often used in commercial gardens and roundabouts, our beige gravel is quality-controlled to prevent dust and ensure durability. Bulk delivery available with installation support.`
  },
  {
    id: 13,
    name: "Red Sand",
    image: "https://silverstarcrafts.com.au/cdn/shop/products/Chili_Red.jpg?v=1627542833",
    category: "sand",
    description: `
Red sand is a fine material commonly used in masonry work, especially for laying interlock bricks and tiles. It is also suitable for backfilling and leveling layers beneath pavers.

Available in dry and semi-wet conditions, our red sand is sourced from certified UAE quarries and supplied in bulk to projects in Dubai, Sharjah, and beyond.`
  },
  {
    id: 14,
    name: "Pebbles",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRayyJ4qsmwZx3nW_AIP8YjnDmYE-o9wG_Kfg&s",
    category: "stones",
    description: `
Pebbles are a timeless choice for enhancing the beauty of gardens, fountains, and modern outdoor spaces. We stock a variety of colors including white, grey, black, and multicolor.

These rounded stones are polished and sorted by size for easy application in landscaping, garden borders, and interior design features. Hotels and residential compounds in the UAE frequently use pebbles for low-maintenance, elegant finishes.`
  },{
  id: 15,
  name: "Red Gravel",
  image: "https://cdn.gravelmaster.co.uk/optimised/20REDG1-1000.jpg",
  category: "stones",
  description: `
Red gravel is a bold and decorative material widely used in landscaping projects across the UAE. Its vibrant earthy tones make it perfect for garden paths, driveways, and villa borders.

This natural gravel is available in various sizes, ideal for both aesthetic and functional applications. It’s a popular choice among landscaping companies, hotels, and property developers for its color contrast, heat resistance, and durability in outdoor settings.`
}
,{
  id: 16,
  name: "Aggregates",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDUcsmLQUKl3HZREKPH-tnSPhvwHWL1LY2AmZ2VxSMFxXs64EMfQ-l1VV0fL6-ulq78tw&usqp=CAU",
  category: "stones",
  description: `
Aggregates are essential construction materials used in concrete production, road base layers, and site leveling. We supply high-quality crushed stone aggregates of different sizes (10mm, 20mm, 40mm) sourced from certified crushers.

Our aggregates are tested for strength, size consistency, and moisture content, ensuring reliable performance for infrastructure and building projects across the UAE. Whether for residential foundations or large-scale government projects, we deliver bulk loads on time with full quality assurance.`
}

];

export default products;
