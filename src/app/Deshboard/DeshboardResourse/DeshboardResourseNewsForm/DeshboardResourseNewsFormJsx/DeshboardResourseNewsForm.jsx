'use client'

import { useState } from "react";
// import { useAuth } from "../../../../../../context/AuthContext";
// import uploadToImgBB from "@/app/ImageUploadSite/UploadImageBBImage";
import Swal from "sweetalert2";
import { TiPlus } from "react-icons/ti";


function DeshboardResourseNewsForm() {

    
//   const { blogallcategory, user } = useAuth();
  const blogallcategory = 10;
  const user = 10;
  const [increseDescripton, setincreseDescripton] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const createdOn = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  console.log(blogallcategory)
  console.log(user.displayName)


  const addSection = () => {
    setincreseDescripton(prev => [...prev, { id: Date.now() }]);
  };





  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);

    const AuthorName = form.get('authorname');
    const AuthorEmail = form.get('authoremail');
    const PassionName = form.get('passonename');
    const BlogCategory = form.get('categorytype');
    const BlogTitle = form.get('blogtitle');



    const BlogImageFile = form.get('blogimage');
    const BlogImage = BlogImageFile ? await uploadToImgBB(BlogImageFile) : '';

    const DescriptionTitle = form.get('descriptiontitle');
    const DescriptionImageFile = form.get('descriptionimage');
    const DescriptionImage = DescriptionImageFile ? await uploadToImgBB(DescriptionImageFile) : '';
    const Description = form.get('description');

    const dynamicDescriptions = await Promise.all(
      increseDescripton.map(async (section, index) => {
        const title = form.get(`descriptionTitle_${index}`);
        const imageFile = form.get(`descriptionImage_${index}`);
        const image = imageFile ? await uploadToImgBB(imageFile) : null;
        const text = form.get(`descriptionDescription_${index}`);
        return { title, image, text };
      })
    );

    const blogsData = {
      AuthorName,
      AuthorEmail,
      PassionName,
      BlogCategory,
      BlogTitle,
      BlogImage,
      DescriptionTitle,
      DescriptionImage,
      Description,
      dynamicDescriptions,
      createdOn
    };

    try {
      const response = await fetch("http://localhost:3000/api/blogsapi/Sec_1_2_half_Banner_Post_api", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(blogsData),
      });

      const res = await response.json();

      if (res.insertedId) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your Post Successfully Added!',
          showConfirmButton: false,
          timer: 1500
        });
        e.target.reset();
        setincreseDescripton([]);
      } else {
        Swal.fire({
          title: 'Error!',
          text: 'Something went wrong.',
          icon: 'error',
          confirmButtonText: 'Try again'
        });
      }
    } catch (error) {
      Swal.fire({
        title: 'Network Error!',
        text: error.message,
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  };


  return (
     <div className='m-10 px-10 py-10 border border-[#9EFF00] rounded-2xl'>
      <h1 className='text-4xl font-semibold uppercase text-center border-b pb-6 text-white'>Resourse Post Form</h1>
      <form onSubmit={handleFormSubmit}>

            {/* Select header category */}
         <div>
            <legend className="text-lg font-semibold pt-5 text-white">Select Blog Category</legend>
            <select
              name="categorytype"
              onChange={(e) => {
                const category = blogallcategory.find(cat => cat.Category_Name === e.target.value);
                setSelectedCategory(category);
                
              }}
              defaultValue=""
              className="select w-full text-white text-lg"
            >
              <option disabled value="" className=" text-white text-lg">Choose Category Name</option>
              {Array.isArray(blogallcategory) && blogallcategory.map(cat => (
                <option key={cat._id}>{cat.Category_Name}</option>
              ))}
            </select>
          </div>

          {/* select second cateogory */}

           <div>
            <legend className="text-lg font-semibold pt-5 text-white">Select Blog Category</legend>
            <select
              name="categorytype"
              onChange={(e) => {
                const category = blogallcategory.find(cat => cat.Category_Name === e.target.value);
                setSelectedCategory(category);
              }}
              defaultValue=""
              className="select w-full text-white text-lg"
            >
              <option disabled value="">Choose Category Name</option>
              {Array.isArray(blogallcategory) && blogallcategory.map(cat => (
                <option key={cat._id} className=" text-white text-lg">{cat.Category_Name}</option>
              ))}
            </select>
          </div>


       
       
          <div className=' gap-3'>
            <div>
              <legend className="text-lg font-semibold pt-5 text-white">Post Title</legend>
              <input type="text" name='blogtitle' className="input w-full text-white text-lg" placeholder="Blog Title" required />
            </div>
            
          </div>

          <div className='py-4 flex justify-between items-center'>
            <h4 className='text-2xl font-semibold uppercase text-white'>Increase Description</h4>
            <button
              type="button"
              className='btn bg-[#9EFF00] border-none text-5xl font-semibold text-black'
              onClick={addSection}
            >
              <TiPlus />
            </button>
          </div>

          <div className='py-10 pb-16'>
            <div>
              <h4 className='text-xl font-semibold btn bg-[#9EFF00] text-black rounded-full px-10'>Section 1</h4>
            </div>
            <div className='grid grid-cols-2 gap-3'>
              <div>
                <legend className="text-lg font-semibold pt-5 text-white">Description Title</legend>
                <input type="text" name='descriptiontitle' className="input w-full text-white text-lg"  placeholder="Description Title" required />
              </div>
            </div>
            <div>
              <legend className="text-lg font-semibold pt-5 text-white">Description</legend>
              <textarea className="textarea w-full text-white text-lg" name='description ' placeholder="Description " rows={12} required></textarea>
            </div>
          </div>

          {increseDescripton.map((section, index) => (
            <div key={section.id} className='py-10 pb-16'>
              <div>
                <h4 className='text-xl font-semibold btn bg-[#9EFF00] text-black rounded-full px-10'>
                  Section {index + 2}
                </h4>
              </div>
              <div className='grid grid-cols-2 gap-3'>
                <div>
                  <legend className="text-lg font-semibold pt-5 text-white">Description Title</legend>
                  <input type="text" name={`descriptionTitle_${index}`} className="input w-full text-lg text-white" placeholder="Description Title" required />
                </div>
              </div>
              <div>
                <legend className="text-lg font-semibold pt-5 text-white">Description</legend>
                <textarea className="textarea w-full text-white text-lg" name={`descriptionDescription_${index}`} placeholder="Description" rows={12} required></textarea>
              </div>
            </div>
          ))}

          <button type="submit" className='btn w-full bg-[#9EFF00] border-none text-black mt-10 text-lg font-semibold'>
            Submit 
          </button>
       
      </form>
    </div>
  )
}

export default DeshboardResourseNewsForm