import mongoose from 'mongoose';
import Course from './models/Course.js';
import 'dotenv/config';
import connectDB from './configs/mongodb.js';

const insertSampleData = async () => {
    await connectDB();

    const sampleCourses = [
        {
            courseTitle: "Introduction to React",
            courseDescription: "Learn the basics of React.js",
            courseThumbnail: "https://example.com/thumbnail1.jpg",
            coursePrice: 99,
            discount: 10,
            educator: "sample_educator_id", // Replace with actual educator ID
            courseContent: [
                {
                    chapterId: "chap1",
                    chapterOrder: 1,
                    chapterTitle: "Getting Started",
                    chapterContent: [
                        {
                            lectureId: "lec1",
                            lectureTitle: "What is React?",
                            lectureDuration: 10,
                            lectureUrl: "https://example.com/lec1.mp4",
                            isPreviewFree: true,
                            lectureOrder: 1
                        }
                    ]
                }
            ]
        },
        {
            courseTitle: "Advanced Node.js",
            courseDescription: "Master Node.js development",
            courseThumbnail: "https://example.com/thumbnail2.jpg",
            coursePrice: 149,
            discount: 15,
            educator: "sample_educator_id", // Replace with actual educator ID
            courseContent: [
                {
                    chapterId: "chap1",
                    chapterOrder: 1,
                    chapterTitle: "Node Basics",
                    chapterContent: [
                        {
                            lectureId: "lec1",
                            lectureTitle: "Installing Node",
                            lectureDuration: 15,
                            lectureUrl: "https://example.com/lec2.mp4",
                            isPreviewFree: true,
                            lectureOrder: 1
                        }
                    ]
                }
            ]
        }
    ];

    try {
        await Course.insertMany(sampleCourses);
        console.log("Sample courses inserted successfully");
    } catch (error) {
        console.error("Error inserting sample data:", error);
    } finally {
        mongoose.connection.close();
    }
};

insertSampleData();
