import image01 from '../../assets/1.jpg'
import image02 from '../../assets/2.jpg'
const Facilities = () => {
    return (
        <div className='pb-12 px-4 md:px-0'>
            <h2 className='text-4xl mb-4 font-semibold'>Explore Our Facilities</h2>
            <div>
                <div className='md:flex gap-8 items-center'>
                    <img className='md:w-1/2 rounded-lg mb-4 md:mb-0' src={image01} alt="" />
                    <div className='md:w-1/2 space-y-2'>
                        <h3 className='text-3xl'>Reading Rooms</h3>
                        <h4 className='text-2xl font-bold'>Silent Study Spaces</h4>
                        <p className='text-xl text-justify'>Silent study spaces include closed reading rooms, computer classrooms, and designated areas within the Library indicated by signage. No talking or conversation is permitted. Silence is required in these spaces at all times.</p>
                    </div>
                </div>
                <div className='md:flex items-center gap-8 pt-8'>
                    <div className='md:w-1/2 space-y-2 mb-4 md:mb-0'>
                        <h3 className='text-3xl'>Group Study Rooms</h3>
                        <h4 className='text-2xl font-bold'>Collaborative Study Spaces</h4>
                        <p className='text-xl text-justify'>Collaborative spaces include group study rooms and designated areas within the Library indicated by signage. Speaking softly is allowed in collaborative areas, but not loud talking. Long cellphone conversations should be done outside of the Library.</p>
                    </div>
                    <img className='md:w-1/2 rounded-lg' src={image02} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Facilities;