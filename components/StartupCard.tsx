import { formatDate } from '@/lib/utils'
import { EyeIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { author } from '@/sanity/schemaTypes/author'
import { Author, Startup } from '@/sanity/types'

export type StartupTypeCard = Omit<Startup, "author"> & {author?: Author}

const StartupCard = ({post} : {post: StartupTypeCard}) => {

  // const desctructure
  // have to rename _id to authorId, as _id already exists.
  const {
    _createdAt, 
    views, 
    author, 
    description, 
    title, 
    category, 
    image, 
    _id 
  } = post;
  
  return (
    <li className='startup-card group'>
      <div className='flex justify-between'>
        <p className='startup_card_date'>
          {/* {formatDate(post._createdAt)} */}
          {/* by descructuring, you can just do this instead: */}
          {formatDate(_createdAt)}
        </p>
        <div className='flex gap-1.5'>
          <EyeIcon className='size-6 text-primary'/>
          <span className='text-16-medium'>{views}</span>
        </div>
      </div>

      <div className='flex justify-between mt-5 gap-5'>
        <div className='flex-1'>
          {/* ?. is the optional chaining operator in TS/JS. */}
          {/* it is used to safely access properties of an object without causing an error if any part of the chain is null or undefined */}
          {/* in the case of if post.autho is null or undefined, it returns undefined instead of throwing an error */}
          <Link href={`/user/${author?._id}`}>
            <p className='text-16-medium line-clamp-1'>{author?.name}</p>
          </Link>
          <Link href={`/startup/${_id}`}>
            {/* line-clamp truncates multiple-line text after a specific number of lines */}
            <h3 className='text-26-semibold line-clamp-1'>{title}</h3>
          </Link>
        </div>
        <Link href={`/user/${author?._id}`}>
          <Image src="https://placehold.co/48x48" alt="placeholder" width={48} height={48} className='rounded-full'/>
        </Link>
      </div>
      <Link href={`/startup/${_id}`}>
        <p className='startup-card_desc'>
          {description}
        </p>
        <img src={image} alt="placeholder" className='startup-card_img'/>
      </Link>
      <div className='flex justify-between gap-3 mt-5'>
        <Link href={`/?query=${category?.toLowerCase()}`}>
          <p className='text-16-medium'>{category}</p>
        </Link>
        <Button className='startup-card_btn' asChild>
          <Link href={`/startup/${_id}`}>
            Details
          </Link>
        </Button>
      </div>
    </li>
  )
}

export default StartupCard