import { useState, useEffect, useRef } from 'react';
import './TodoForm.scss'

function TodoForm() {
    const [preview, setPreview] = useState(null);
    const formRef = useRef(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => setPreview(e.target.result);
            reader.readAsDataURL(file);
        }
    };

    const handleRemoveImage = () => {
        setPreview(null);
        document.getElementById('profileImage').value = "";
    };

    useEffect(() => {
        const handleScroll = () => {
            const form = formRef.current;
            if (form.scrollTop > 0) {
                form.style.marginTop = '20px';
                form.style.padding = '0 0 20px 0';
            } else {
                form.style.marginTop = '10px';
                form.style.padding = '10px 0 20px 0';
            }
        };

        const formElement = formRef.current;
        formElement.addEventListener('scroll', handleScroll);
        return () => formElement.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <form ref={formRef}>
            <div className='malumot'>
                <input type="text" placeholder='' required />
                <div className='labelline'>Ism va Familiya</div>
            </div>
            <div className='malumot'>
                <input type="email" placeholder='' required />
                <div className='labelline'>Email</div>
            </div>
            <div className='malumot'>
                <input type="tel" placeholder='' required />
                <div className='labelline'>Telefon Raqami</div>
            </div>
            <div className='malumot'>
                <input type="date" />
                <div className='labelline'>Tug'ilgan Sana</div>
            </div>
            <div className='malumot radio-group'>
                <label>Jinsingiz:</label>
                <label><input type="radio" name="gender" value="Erkak" required /> Erkak</label>
                <label><input type="radio" name="gender" value="Ayol" required /> Ayol</label>
            </div>
            <div className='malumot checkbox-group'>
                <label>Hobbilaringiz:</label>
                <label><input type="checkbox" value="Sport" /> Sport</label>
                <label><input type="checkbox" value="Kitob o'qish" /> Kitob o'qish</label>
                <label><input type="checkbox" value="Musiqa" /> Musiqa</label>
            </div>
            <div className='malumot'>
                <select required>
                    <option value="">Mamlakatni tanlang</option>
                    <option value="Uzbekistan">O'zbekiston</option>
                    <option value="Kazakhstan">Qozog'iston</option>
                    <option value="Turkey">Turkiya</option>
                    <option value="Russia">Rossiya</option>
                </select>
            </div>
            <div className="malumot">
                <label htmlFor="profileImage" className="custom-file-upload">📁 Surat Yuklash</label>
                <input type="file" id="profileImage" accept="image/*" onChange={handleImageChange} />
                {preview && (
                    <div className="image-preview">
                        <img src={preview} alt="Rasm" className="preview" />
                        <button type="button" className="remove-btn" onClick={handleRemoveImage}>✖</button>
                    </div>
                )}
            </div>
            <div className='malumot'>
                <textarea placeholder='' rows="4"></textarea>
                <div className='labelline'>Qo'shimcha Izoh</div>
            </div>
            <button type="submit">Yuborish</button>
        </form>
    );
}

export default TodoForm;