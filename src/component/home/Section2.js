import React, { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import Swal from "sweetalert2";
import dayjs from 'dayjs';
import 'dayjs/locale/id';
const Section2 = () => {
    const { t } = useTranslation();

    // const [visible, setVisible] = useState(5)
    const [visible] = useState(5)

    const [posts, setPosts] = useState([]);

    const convertToSlug = (title) => {
        if (!title) return ""; // Handle null or undefined title
        return title
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-');
    };

    useEffect(() => {

        // Function to fetch posts
        const fetchPosts = async () => {
            try {
                const url = process.env.REACT_APP_API_URL;
                const endpoint = process.env.REACT_APP_API_POST;
                const response = await axios.get(`${url}${endpoint}`);
                setPosts(response.data);
            } catch (err) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: err,

                });
            }
        };

        fetchPosts(); // Call fetchPosts function when component mounts
    }, []);

    return (
        <section className="funfact-section-direktorat">
            <div className="container-fluid">
                <div className="funfact-box " style={{ paddingTop: '90px' }}>
                    <div className="section-title-box text-center">
                        <h2 className="section-title" style={{ color: '#146AA4' }}>{t('beritaTerkait')}</h2>
                    </div>
                </div>
                <div className="row row-gutter-30 justify-content-center">
                    {posts.slice(0, visible).map((item) => (
                        <div className="col-lg-2" key={item.id}>
                            <div className="berita-card">
                                <div className="berita-card-imgbox-direktorat-home ">
                                    <a href={`/berita-terkait/${convertToSlug(item.title)}`}><img src="/assets/image/berita3.svg" className="img-fluid" alt={item.title} /></a>
                                </div>
                                <div className="berita-content-direktorat">
                                    <div className="direktorat-tag-home">
                                        <span>#BERITABARU</span>
                                    </div>
                                    <div className="event-card-title-direktorat-home pb-2">
                                        <h4>
                                            <a href={`/berita-terkait/${convertToSlug(item.title)}`}>{item.title}</a>
                                        </h4>
                                    </div>
                                    <div className="event-card-info-direktorat-home">
                                        <span>{dayjs(item.news_datetime).format('DD MMMM YYYY')}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                    }

                </div >
            </div>
        </section>
    )
}

export default Section2