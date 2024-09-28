
//TYPE INTERSECTION
type User = {
    name: string;
    email: string;
  };
 type admin = User & {
  getUserDeatils(): void;
};

function typeIntersection(A: admin) {
  A.getUserDeatils();
} 