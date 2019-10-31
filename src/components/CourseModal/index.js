import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { MdAccessTime, MdTimelapse } from 'react-icons/md';
import { Content } from './styles';
import Modal from '../Modal';

import * as courseActions from '../../store/modules/course/actions';
import * as ModalActions from '../../store/modules/modal/actions';

export default function CourseModal() {
  const dispatch = useDispatch();
  const [keyModal] = useState(1);
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);

  const openState = useSelector(
    state => state.modal.filter(sm => sm.key === keyModal)[0]
  );
  const courseData = useSelector(state => state.course);

  useEffect(() => {
    if (courseData) setData(courseData[0].totalCourse);
  }, [courseData]);

  useEffect(() => {
    if (openState) {
      setOpen(openState.open);
    } else {
      setOpen(false);
    }
  }, [openState]);

  const handleChangeCourse = course => {
    const newCourse = [...courseData][0];
    newCourse.course = course;
    dispatch(courseActions.addCourse(newCourse));

    dispatch(ModalActions.closeModal(1));
    dispatch(ModalActions.openModal(2));
  };

  return (
    <Modal title="Opçoes de cursos" open={open} key="1">
      <Content>
        <div className="course-box">
          {data.map(d => (
            <div
              key={d.id}
              className="course-single"
              onClick={() => handleChangeCourse(d)}
            >
              <div className="content">
                <div className="icon">
                  <img
                    src={d.url}
                    className="CurseCarouselstyles__IconImg-sc-13gzzuu-2 izbUYr"
                    alt="course-info"
                  />
                </div>
                <div className="title">{d.courseName}</div>
                <div className="infos">
                  <div className="duration">
                    <MdAccessTime size={18} color="#212121" />
                    <div>{d.courseDuration}</div>
                  </div>
                  <div className="time">
                    <MdTimelapse size={18} color="#212121" />
                    <div>{d.courseTime}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Content>
    </Modal>
  );
}
