import { Layout, Menu } from 'antd';
import sidebarItemGenerator from '../../utils/sidebarItemGenerator';
import { adminPath } from '../../routes/admin.route';
import { facultyPaths } from '../../routes/feculty.routes';
import { studentPaths } from '../../routes/student.routes';
import { useAppSelector } from '../../redux/hooks';
import { selectCurrentUser } from '../../redux/features/auth/authSlice';
const { Sider } = Layout;

const userRole = {
  ADMIN: 'admin',
  FACULTY: 'faculty',
  STUDENT: 'student',
};

const Sidebar = () => {
  let sidebarItem;

  const user = useAppSelector(selectCurrentUser);

  switch (user!.role) {
    case userRole.ADMIN:
      sidebarItem = sidebarItemGenerator(adminPath, userRole.ADMIN);
      break;
    case userRole.FACULTY:
      sidebarItem = sidebarItemGenerator(facultyPaths, userRole.FACULTY);
      break;

    case userRole.STUDENT:
      sidebarItem = sidebarItemGenerator(studentPaths, userRole.STUDENT);
      break;

    default:
      return null;
  }

  return (
    <Sider breakpoint="lg" collapsedWidth="0">
      <div
        style={{
          color: 'white',
          textAlign: 'center',
          height: '4rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h1>PH Uni</h1>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['4']}
        items={sidebarItem}
      />
    </Sider>
  );
};

export default Sidebar;
