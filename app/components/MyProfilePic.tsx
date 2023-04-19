import React from 'react';
import Image from 'next/image';

export default function MyProfilePic() {
  return (
    <section className='w-full mx-auto'>
      <Image
        className='rounded-full mx-auto mt-2'
        src='/images/soyabonbon.png'
        width={300}
        height={300}
        alt='soyabonbon'
        priority={true}
      />
    </section>
  );
}
