import React from "react";
import CartLesson from "../../../components/CartLesson/CartLesson";
import "./LessonsCategory.sass";

const LessonsCategory = () => {
  const data = [
    {
      courseName: "Открый урок на курс Java Development",
      courseDate: "Дата: 2 мая, 9:00",
    },
    {
      courseName: "Открый урок на курс Java Development",
      courseDate: "Дата: 2 мая, 9:00",
    },
    {
      courseName: "Открый урок на курс Java Development",
      courseDate: "Дата: 2 мая, 9:00",
    },
  ];
  return (
    <section className="lessons_category">
      <div className="container-big">
        <div className="category_carts">
          {data.map((x, index) => (
            <CartLesson
              key={index}
              courseName={x.courseName}
              courseDate={x.courseDate}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LessonsCategory;
