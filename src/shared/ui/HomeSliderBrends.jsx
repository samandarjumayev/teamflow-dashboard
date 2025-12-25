
export default function HomeSliderBrends() {
  const brands = [
    { name: 'React JS', img: 'https://cdn-icons-png.flaticon.com/128/17718/17718005.png' },
    { name: 'Redux Toolkit', img: 'https://cdn-icons-png.flaticon.com/128/17718/17718005.png' },
    { name: 'React Query', img: 'https://cdn-icons-png.flaticon.com/128/17718/17718005.png' },
    { name: 'Next JS', img: 'https://cdn-icons-png.flaticon.com/128/17718/17718005.png' },
    { name: 'TypeScript', img: 'https://cdn-icons-png.flaticon.com/128/17718/17718005.png' },
  ];

  return (
    <div
      style={{
        width: "100%",
        overflow: "hidden",
        padding: "40px 0",
      }}
    >
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .slider-container {
          display: flex;
          animation: scroll 20s linear infinite;
          width: fit-content;
        }
        
        .slider-item {
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 200px;
          padding: 0 20px;
          color: #fff;
          font-size: 18px;
          font-weight: 600;
          white-space: nowrap;
        }
      `}</style>
      
      <div className="slider-container">
        {/* Asl items */}
        {brands.map((brand, index) => (
          <div key={index} className="slider-item">
            <img src={brand?.img} alt="" className="w-[50px]" />
            <p className="text-[#8b949e] text-[35px]">{brand.name}</p>
          </div>
        ))}
        
        {/* Duplikat items (seamless loop uchun) */}
        {brands.map((brand, index) => (
          <div key={`dup-${index}`} className="slider-item mx-5">
            <img src={brand?.img} alt="" className="w-[50px]" />
            <p className="text-[#8b949e] text-[35px]">{brand.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}