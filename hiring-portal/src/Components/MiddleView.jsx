import React from "react";
import styles from "../CSS/middleview.module.css";
import jobimg from "../assests/jobs.png";
import LazyLoad from 'react-lazyload';

const roles = [
    { role: "Software Developer", jobs: 38 },
    { role: "Data Scientist", jobs: 24 },
    { role: "Project Manager", jobs: 17 },
    { role: "UI/UX Designer", jobs: 12 },
    { role: "Marketing Specialist", jobs: 29 },
    { role: "Sales Manager", jobs: 22 },
    { role: "Product Manager", jobs: 14 },
    { role: "HR Specialist", jobs: 19 },
    { role: "Business Analyst", jobs: 31 },
    { role: "Customer Support", jobs: 20 },
];

const MiddleView = () => {

    return (
        <div className={styles.middleview}>
            <div className={styles.textPart} data-aos="fade-right">
                <h1>Discover Jobs Across Popular Roles</h1>
                <center>
                    <p>Select a role and we'll show you relevant jobs for it!</p>
                </center>
                <div className={styles.rolesCarousel}>
                    <div className={styles.rolesList}>
                        {roles.map((item, index) => (
                            <div className={styles.role} key={index}>
                                <span>{item.role}</span> <span className={styles.jobCount}>jobs</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className={styles.jobimg} data-aos="fade-left">
                <LazyLoad height={200} offset={100} once>
                    <img src={jobimg} alt="jobs" className={styles.jobImage} loading="lazy" />
                </LazyLoad>
            </div>
        </div>
    );
};

export default MiddleView;
