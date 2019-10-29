import React from 'react';

import { MdAccessTime, MdTimelapse } from 'react-icons/md';
import { Content } from './styles';
import Modal from '../Modal';

export default function CourseModal() {
  return (
    <Modal title="Opçoes de cursos">
      <Content>
        <div className="course-box">
          <div className="course-single">
            <div className="content">
              <div className="icon">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/provi-site.appspot.com/o/website_assets%2Ficons%2Fgenerico3.png?alt=media&amp;token=61682e6e-3d3d-4d0b-bbd4-20aaad78c1b9"
                  className="CurseCarouselstyles__IconImg-sc-13gzzuu-2 izbUYr"
                  alt="course-info"
                />
              </div>
              <div className="title">UX/UI Design</div>
              <div className="infos">
                <div className="duration">
                  <MdAccessTime size={18} color="#212121" />
                  <div>6 anos</div>
                </div>
                <div className="time">
                  <MdTimelapse size={18} color="#212121" />
                  <div>Part-time</div>
                </div>
              </div>
            </div>
          </div>
          <div className="course-single">
            <div className="content">
              <div className="icon">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/provi-site.appspot.com/o/website_assets%2Ficons%2Ftec3.png?alt=media&amp;token=c4c83b04-d296-4572-9c04-81619a03ebac"
                  className="CurseCarouselstyles__IconImg-sc-13gzzuu-2 izbUYr"
                  alt="course-info"
                />
              </div>
              <div className="title">UX/UI Design</div>
              <div className="infos">
                <div className="duration">
                  <MdAccessTime size={18} color="#212121" />
                  <div>6 anos</div>
                </div>
                <div className="time">
                  <MdTimelapse size={18} color="#212121" />
                  <div>Part-time</div>
                </div>
              </div>
            </div>
          </div>
          <div className="course-single">
            <div className="content">
              <div className="icon">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/provi-site.appspot.com/o/website_assets%2Ficons%2Ftec2.png?alt=media&amp;token=d1eb422b-fcba-4063-8f90-62c95fc6506d"
                  className="CurseCarouselstyles__IconImg-sc-13gzzuu-2 izbUYr"
                  alt="course-info"
                />
              </div>
              <div className="title">UX/UI Design</div>
              <div className="infos">
                <div className="duration">
                  <MdAccessTime size={18} color="#212121" />
                  <div>6 anos</div>
                </div>
                <div className="time">
                  <MdTimelapse size={18} color="#212121" />
                  <div>Part-time</div>
                </div>
              </div>
            </div>
          </div>
          <div className="course-single">
            <div className="content">
              <div className="icon">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/provi-site.appspot.com/o/website_assets%2Ficons%2Fgenerico1.png?alt=media&amp;token=9740ab23-4382-4a37-8274-338b6327bab4"
                  className="CurseCarouselstyles__IconImg-sc-13gzzuu-2 izbUYr"
                  alt="course-info"
                />
              </div>
              <div className="title">UX/UI Design</div>
              <div className="infos">
                <div className="duration">
                  <MdAccessTime size={18} color="#212121" />
                  <div>6 anos</div>
                </div>
                <div className="time">
                  <MdTimelapse size={18} color="#212121" />
                  <div>Part-time</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Content>
    </Modal>
  );
}
