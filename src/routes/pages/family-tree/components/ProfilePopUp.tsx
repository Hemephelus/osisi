import { Dialog } from '@headlessui/react'
import { DocumentIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'
// import { Link } from 'react-router-dom'

export default function ProfilePopUp({profile}:{profile: Profile}) {
  let [isOpen, setIsOpen] = useState(false)
  
  return (
    <>
      <button onClick={() => setIsOpen(true)} className='flex items-center gap-1.5'>    <DocumentIcon className="ml-[22px] size-6 text-sec" />
      Profile</button>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <Dialog.Panel className="px-[5%] py-[5%] flex gap-8 flex-col  font-sora  bg-sec shadow-2xl border justify-center items-center text-center m-[5%] text-pri">
       
      <section className=" flex justify-center items-center flex-col gap-4 capitalize w-full">
        <a href={`/family?id=${profile.id}`} className="h-[100px] w-[100px] rounded-full hover:text-sec hover:bg-acc duration-300 bg-[#FFFDD0] text-pri border-2 border-acc flex items-center justify-center text-5xl ">
        {profile?.full_name[0]}
        </a>
        {/* <Link href={"/"} title="edit">
          <PencilSquareIcon className="size-6" />
        </Link> */}
        <p className="text-center text-2xl">{profile?.full_name}</p>
        <p>
          <span>{profile?.year_of_birth || "No Year Found"}</span>
        </p>
        <p>
          <span>{profile?.status}</span> {"<|>"} <span>{profile?.sex}</span>
        </p>
      </section>

      <section className="flex gap-4 flex-wrap justify-between">
        <a
          href={`/family?id=${profile.id}&relationship=parent&mode=add`}
          title="edit"
        >
          <p className="p-2 text-pri hover:text-sec hover:bg-acc border border-acc/60 duration-300">
            Add Parent
          </p>
        </a>
        <a
          href={`/family?id=${profile.id}&relationship=child&mode=add`}
          title="edit"
        >
          <p className="p-2 text-pri hover:text-sec hover:bg-acc border border-acc/60 duration-300">
            Add Child
          </p>
        </a>
        <a
          href={`/family?id=${profile.id}&relationship=spouse&mode=add`}
          title="edit"
        >
          <p className="p-2 text-pri hover:text-sec hover:bg-acc border border-acc/60 duration-300">
            Add Spouse
          </p>
        </a>

        {/* add parent  */}
        {/* add child  */}
        {/* add spouse  */}
      </section>

            <div className="flex gap-4">
              <button onClick={() => setIsOpen(false)} className='text-acc'>Close</button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  )
}