function Form() {
  return (
    <div className="sec-font ">
      <form action="" className="px-[15%] py-[5%] flex gap-8 flex-col">
        <section className=" flex flex-wrap gap-4">
          <div>
            <label htmlFor="first_name">First Name</label>
            <br />
            <input
              type="text"
              id="first_name"
              value="dbonbf"
              className="text-black"
            />
          </div>
          <div>
            <label htmlFor="middle_name">Middle Name</label>
            <br />
            <input
              type="text"
              id="middle_name"
              value=""
              className="text-black"
            />
          </div>
          <div>
            <label htmlFor="last_name">Last Name</label>
            <br />
            <input type="text" id="last_name" value="" className="text-black" />
          </div>
        </section>

        <section>
          <p>Sex</p>
          <div className="flex gap-4">
          <div>
            <input type="radio" id="male" name="sex" value="male" />{' '}
            <label htmlFor="male">Male</label>
          </div>
          <div>
            <input type="radio" id="female" name="sex" value="female" />{' '}
            <label htmlFor="female">Female</label>
          </div>
          </div >
        </section>

        <section>
          <p>Status</p>
          <div className="flex gap-4">
          <div>
            <input type="radio" id="living" name="status" value="living" />{' '}
            <label htmlFor="living">Living</label>
          </div>
          <div>
            <input type="radio" id="deceased" name="status" value="deceased" />{' '}
            <label htmlFor="deceased">Deceased</label>
          </div>
          </div>
        </section>

        <section className="">
          <label htmlFor="date_of_birth">Date of Birth</label><br />
          <input
            type="date"
            id="date_of_birth"
            value=""
            className="text-black"
          />
        </section>
        <button className=" w-fit px-4 py-2 bg-[#FFFDD0] text-[#691540] hover:border hover:bg-[#691540] hover:text-[#FFFDD0] duration-300">Submit</button>
      </form>
    </div>
  );
}

export default Form;
