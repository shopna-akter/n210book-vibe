const AboutUs = () => {
    return (
        <div className="container mx-auto px-8 py-12">
            <h1 className="text-4xl font-bold mb-8">About Us</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                    <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                    <p className="text-lg leading-relaxed mb-6">
                        At BookWorld, our mission is to revolutionize the way people discover, consume, and engage with literature. We are committed to fostering a global community of readers who are passionate about exploring diverse stories, ideas, and perspectives. Through our platform, we aim to empower readers to connect with books that inspire, educate, and entertain, ultimately enriching their lives and broadening their horizons.
                    </p>
                    <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
                    <p className="text-lg leading-relaxed mb-6">
                        Our vision is to create a world where everyone has access to the transformative power of reading. We envision a future where literacy is not just a skill, but a fundamental human right. By leveraging technology and innovation, we seek to break down barriers to literacy and promote lifelong learning on a global scale. We aspire to be a driving force behind a more informed, empathetic, and interconnected society, where the love of reading transcends borders and inspires positive change.
                    </p>
                    <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
                    <ul className="list-disc pl-6 mb-6">
                        <li className="text-lg mb-2">Passion for Literature: We are deeply passionate about the written word and believe in its power to inspire, challenge, and transform.</li>
                        <li className="text-lg mb-2">Diversity & Inclusion: We celebrate diversity in literature and strive to amplify voices that have historically been marginalized or underrepresented.</li>
                        <li className="text-lg mb-2">Excellence: We are committed to upholding the highest standards of quality in everything we do, from book recommendations to user experience.</li>
                        <li className="text-lg mb-2">Community: We believe in the strength of community and the importance of fostering meaningful connections among readers.</li>
                        <li className="text-lg mb-2">Innovation: We embrace innovation and continuously seek new ways to enhance the reading experience and promote literacy.</li>
                    </ul>
                </div>
                <div>
                    <div className="bg-gray-200 rounded-lg p-6">
                        <h2 className="text-2xl font-semibold mb-4">Our History</h2>
                        <p className="text-lg leading-relaxed mb-6">
                            Founded in 20XX, BookWorld started as a passion project of a group of avid readers who wanted to create a space where fellow book lovers could connect and share their love for literature. Over the years, we have grown into a thriving community with thousands of members from around the globe.
                        </p>
                        <h2 className="text-2xl font-semibold mb-4">Our Achievements</h2>
                        <ul className="list-disc pl-6 mb-6">
                            <li className="text-lg mb-2">Named Best Book Recommendation Platform by Readers Choice Awards for three consecutive years (20XX, 20XX, 20XX).</li>
                            <li className="text-lg mb-2">Reached over 1 million registered users milestone in 20XX.</li>
                            <li className="text-lg mb-2">Featured in top publications such as The New York Times, BBC, and The Guardian.</li>
                        </ul>
                        <img src="https://img.freepik.com/free-vector/online-library-with-stack-books-notebook-big-images-wi-fi-sign-small-people-figurines_1284-59778.jpg?w=740&t=st=1711563112~exp=1711563712~hmac=6d38738c465ad8882d4a0b44ea5cca02dad0c6b8e348a07c79c385389d8308ac" alt="About Us Image" className="rounded-lg" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;