import assistant from '../../assets/assistant.jpg'
import assistant2 from '../../assets/assistant2.jpg'
import assistant3 from '../../assets/assistant3.jpg'
import partner from '../../assets/partner.jpg'
import partner2 from '../../assets/partner2.jpg'
import md from '../../assets/md.jpg'
import vicechair from '../../assets/vicechair.jpg'
import chair from '../../assets/chair.jpg'
const Members = () => {
    return (
        <div className='px-4 md:px-0'>
            <h2 className='text-4xl mb-4 font-semibold'>Library Board Members</h2>
            <div className='md:grid md:grid-cols-4 md:gap-8 space-y-4 md:space-y-0'>
                <div>
                    <img className='rounded-md' src={assistant} alt="" />
                    <h2 className='text-xl mt-2'>George Clark</h2>
                    <p>Vice Chair</p>
                </div>
                <div>
                    <img className='rounded-md' src={assistant2} alt="" />
                    <h2 className='text-xl mt-2'>Barry Walsh</h2>
                    <p>Chair</p>
                </div>
                <div>
                    <img className='rounded-md' src={assistant3} alt="" />
                    <h2 className='text-xl mt-2'>Rita Parker</h2>
                    <p>Managing Director</p>
                </div>
                <div>
                    <img className='rounded-md' src={partner} alt="" />
                    <h2 className='text-xl mt-2'>Janet Green</h2>
                    <p>Secretary-Treasurer</p>
                </div>
                <div>
                    <img className='rounded-md' src={partner2} alt="" />
                    <h2 className='text-xl mt-2'>Karen Smith</h2>
                    <p>Assistant</p>
                </div>
                <div>
                    <img className='rounded-md' src={md} alt="" />
                    <h2 className='text-xl mt-2'>Mia Lukas</h2>
                    <p>Chair</p>
                </div>
                <div>
                    <img className='rounded-md' src={chair} alt="" />
                    <h2 className='text-xl mt-2'>Jeremy Lee</h2>
                    <p>partner</p>
                </div>
                <div>
                    <img className='rounded-md' src={vicechair} alt="" />
                    <h2 className='text-xl mt-2'>Robert Morris</h2>
                    <p>Chair</p>
                </div>
            </div>
        </div>
    );
};

export default Members;