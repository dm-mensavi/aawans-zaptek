import leftbg from '../public/breadcrumb-shape-1.png'
import rightbg from '../public/breadcrumb-shape-2.png'
import practicebg from '../public/practicearea_dot.svg'
import casesbg from '../public/cases-background.jpg'

export const sectionStyles = {
  background: `url(${leftbg}), url(${rightbg})`,
  backgroundColor: "#f9f7f3",
  backgroundPositionY: 'bottom, top',
  backgroundPositionX: 'left, right',
  backgroundSize: 'auto, auto',
  backgroundRepeat: 'no-repeat, no-repeat',
  backgroundAttachment: 'fixed, fixed',
  width: '100%',
};

export const practiceStyles = {
  background: `url(${practicebg}), url(${rightbg})`,
  backgroundColor: "#f9f7f3",
  backgroundPositionY: '80px, top',
  backgroundPositionX: '150px, right',
  backgroundSize: 'auto, 60%',
  backgroundRepeat: 'no-repeat, no-repeat',
  width: '100%',
  height: '600px',
};

export const casesStyles = {
  background: `url(${casesbg})`,
  backgroundColor: "#f9f7f3",
  backgroundSize: 'auto',
  backgroundRepeat: 'no-repeat',
  width: '100%',
  height: '670px',
};