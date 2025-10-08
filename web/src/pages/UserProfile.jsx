import { Badge } from "@/components/ui/badge";
import uiStore from "@/store/uiStore";

function UserProfile() {
  const activePage = uiStore((state) => state.activePage);
  // const setActivePage = uiStore((state) => state.setActivePage);
  // setActivePage("User Profile");
  
  return <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quo aliquam id assumenda optio cupiditate suscipit earum reprehenderit eum perferendis recusandae velit enim, aperiam, inventore eaque repellendus facilis labore dignissimos.

    <Badge>{activePage}</Badge>
  </div>;
}

export default UserProfile;
