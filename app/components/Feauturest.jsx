import Image from 'next/image';

const Feauturest = () => {
  return (
    <section className="hero min-h-screen m-10 bg-black text-white flex  items-center justify-center">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center text-center space-y-8">
          <div>
            <h1 className="text-3xl font-bold my-custom w-[400px]">
              Fluid AI was born out of a desire to simplify and streamline modern life
            </h1>
          </div>
          <section className="  w-full h-screen  sticky top-[100px] bg-black text-white flex justify-between items-center px-8 md:px-16">
      <div className="md:w-1/3 left-0 text-left  mx-[-30px] space-y-4">
        <h2 className="text-2xl font-bold">Fluid AI: Simplify, Organize, and Achieve More</h2>
        <p className="text-sm">
          In a world where daily tasks, communication, and goals often become overwhelming, Fluid AI offers an innovative solution. Combining advanced AI technology with a user-friendly interface, it brings to-do lists, chats, saved items, and bucket lists into one seamless platform.
        </p>
      </div>

      <div className="absolute left-1/2 transform -translate-x-1/2">
        <Image src='/e.png' alt="Mobile Image" width={300} height={300} />
      </div>
    </section>

          <section className="sticky top-[50px] w-full h-screen  bg-black text-white flex justify-center items-center">
      <div className="absolute w-1/4 h-auto">
        <Image
          src="/ab.png"
          alt="Mobile placeholder"
          width={512}
          height={514}
          layout="responsive"
          className="mx-auto"
        />
      </div>

      <div className="absolute right-0 w-[400px]  mx-[-20px] px-[30px] text-right">
        <h2 className="text-2xl font-bold mb-4 text-center">Fluid AI: Simplify, Organize, and Achieve More</h2>
        <p className="text-sm leading-relaxed text-center">
          In a world where daily tasks, communication, and goals often become overwhelming, Fluid AI offers an innovative solution. Combining advanced AI technology with a user-friendly interface, it brings together to-do lists, chats, saved items, and bucket lists into one seamless platform.
        </p>
      </div>
    </section>

    <section className="sticky top-[50px] w-full h-screen m-8 bg-black text-white flex justify-center items-center">

      <div className="absolute left-0 w-[400px]  mx-[20px] px-[-30px] text-left">
        <h2 className="text-2xl font-bold mb-4 text-center">Fluid AI: Simplify, Organize, and Achieve More</h2>
        <p className="text-sm leading-relaxed text-center">
          In a world where daily tasks, communication, and goals often become overwhelming, Fluid AI offers an innovative solution. Combining advanced AI technology with a user-friendly interface, it brings together to-do lists, chats, saved items, and bucket lists into one seamless platform.
        </p>
      </div>
      <div className="absolute w-1/4 h-auto">
        <Image
          src="/abc.png"
          alt="Mobile placeholder"
          width={512}
          height={514}
          layout="responsive"
          className="mx-auto"
        />
      </div>

     
    </section>

    <section className="sticky top-[50px] w-full h-screen m-8 bg-black text-white flex justify-center items-center">
      <div className="absolute w-1/4 h-auto">
        <Image
          src="/a.png"
          alt="Mobile placeholder"
          width={512}
          height={514}
          layout="responsive"
          className="mx-auto"
        />
      </div>

      <div className="absolute right-0 w-[400px]  mx-[-20px] px-[30px] text-right">
        <h2 className="text-2xl font-bold mb-4 text-center">Fluid AI: Simplify, Organize, and Achieve More</h2>
        <p className="text-sm leading-relaxed text-center">
          In a world where daily tasks, communication, and goals often become overwhelming, Fluid AI offers an innovative solution. Combining advanced AI technology with a user-friendly interface, it brings together to-do lists, chats, saved items, and bucket lists into one seamless platform.
        </p>
      </div>
    </section>
       
        </div>
      </div>
    </section>
  );
};

export default Feauturest;
