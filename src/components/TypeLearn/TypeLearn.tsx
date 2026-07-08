export const TypeLearn = () => {
  // Basic types
  const username: string = "Om Prakash";
  const userId: number = 12113;
  const subjects: Array<string> = [
    "English",
    "Math",
    "Science",
    "Physics",
    "Chemestry",
  ];
  const thirdPerson: unknown = "Amit";

  //   Type Alias
  type User = {
    userName: string;
    userId: number;
  };

  type Admin = {
    roles: string[];
    type: string;
  };

  //   Type (&) AND
  const userAdmin: User & Admin = {
    userName: "omprakash268",
    userId: 2433,
    type: "admin",
    roles: ["READ", "WRITE", "MODIFY"],
  };

  //   Type (|) OR
  const user: User | Admin = {
    userName: "Amit",
    userId: 5664,
  };

  type codeType = number | string;
  const code = "etowenASdse";

  //   Type Narrowing
  const getAccessCode = (accessCode: codeType) => {
    if (typeof accessCode == "string") {
      return accessCode.toUpperCase();
    } else {
      return accessCode;
    }
  };

  //   Interface
  interface IResponse {
    name: string;
    id: number;
    link: string;
    readonly price: number;
    relatedItems: Array<string>;
    itemLeft: number;
  }

  const item = {
    name: "Mobile X",
    id: 30454,
    price: 23999,
  };

  //   Pick ( selecteed fields only )
  const processElectronicItem = (
    item: Pick<IResponse, "name" | "id" | "price">,
  ) => {
    console.log(item);
    return item.name;
  };

  const makeupItem = {
    name: "Lip Gloss",
    id: 36458,
    price: 239,
    itemLeft: 10,
  };

  //   Partial ( all fields are optional )
  const processMakeupItem = (item: Partial<IResponse>) => {
    return item?.itemLeft || null;
  };

  //   Required ( all fields are required )

  const footWearItem = {
    name: "Adidas Nitro X",
    id: 67458,
    price: 45000,
    link: "htts://www.adidas.com",
    relatedItems: ["Adidas sports 2", "Adidas running space"],
    itemLeft: 3,
  };

  //   Partial ( all fields are optional )
  const processFootWearItem = (item: Required<IResponse>) => {
    console.log(item);
    return item.name;
  };

  const clothItem = {
    name: "Half T shirt",
    id: 67489,
    price: 400,
    itemLeft: 53,
  };

  //   Omit ( exclude selected fileds and keep rest all fields )
  const processClothItem = (item: Omit<IResponse, "link" | "relatedItems">) => {
    console.log(item);
    return item.name;
  };

  //   Generics
  interface IGenericResponse<T> {
    data: T;
    status: number;
    message: string;
  }

  const responseBody = {
    data: [1, 2, 3, 4, 5, 6],
    status: 200,
    message: "Data fetched successfully",
  };

  const getUserIds = (responseBody: IGenericResponse<Array<number>>) => {
    return responseBody.data;
  };

  return (
    <div>
      <p>TypeLearn</p>
      <p>User Name : {username}</p>
      <p>User ID : {userId}</p>
      <p>Subjects : </p>
      <ul>
        {subjects.map((sub: string, idx: number) => {
          return <li key={idx}>{sub}</li>;
        })}
      </ul>
      <p>{thirdPerson as string}</p>
      <hr />

      <p>{userAdmin.userName}</p>
      <p>{userAdmin.userId}</p>
      <p>{userAdmin.type}</p>
      <p>Roles : </p>
      <ul>
        {userAdmin.roles.map((role: string, idx: number) => {
          return <li key={idx}>{role}</li>;
        })}
      </ul>
      <hr />
      <p>{user.userName}</p>
      <p>{user.userId}</p>
      <p>{getAccessCode(code)}</p>

      <p>{processElectronicItem(item)}</p>
      <p>{processMakeupItem(makeupItem)}</p>
      <p>{processFootWearItem(footWearItem)}</p>
      <p>{processClothItem(clothItem)}</p>

      <hr />

      <ul>
        {getUserIds(responseBody).map((id: number) => {
          return <li key={id}>{id}</li>;
        })}
      </ul>
    </div>
  );
};
