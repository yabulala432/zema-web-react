import { useState } from "react";

import { Box, VStack, Avatar } from "@chakra-ui/react";

import dataStore from "../../store/DataStore";
import {
  ezlKdaseAtnatewos,
  ezlKdaseBaslyos,
  ezlKdaseDiyoscoros,
  ezlKdaseEgzi,
  ezlKdaseEpifanyos,
  ezlKdaseGorgoryos,
  ezlKdaseGorgoryosKalie,
  ezlKdaseHawaryat,
  ezlKdaseKerlos,
  ezlKdaseMaryam,
  ezlKdaseMegbiya,
  ezlKdaseSelestuMiet,
  ezlKdaseWeldeNegodguad,
  ezlKdaseYaekobZeSrug,
  ezlzKdaseYohansAfewerk,
  geezKdaseAtnatewos,
  geezKdaseBaslyos,
  geezKdaseDiyoscoros,
  geezKdaseEgzi,
  geezKdaseEpifanyos,
  geezKdaseGorgoryos,
  geezKdaseGorgoryosKalie,
  geezKdaseHawaryat,
  geezKdaseKerlos,
  geezKdaseMaryam,
  geezKdaseMegbiya,
  geezKdaseSelestuMiet,
  geezKdaseWeldeNegodguad,
  geezKdaseYaekobZeSrug,
  geezKdaseYohansAfewerk,
} from "../../store/kdase_titles";

import PanelList from "./PanelList";
import SpinningHamburgerMenu from "./SpiningMenu";

import kdase from "../../assets/kdase.jpg";
import qerlos from "../../assets/qerlos.jpeg";
import hawaryat from "../../assets/hawaryat.jpg";
import selestuMeit from "../../assets/selestu_meit.jpeg";
import weldenegodguad from "../../assets/weldenegodguad.jpeg";
import yaekobZesrug from "../../assets/yaekob_zesrug.jpeg";
import yohansAfewerk from "../../assets/yohans_afewerk.jpeg";
import gorgoryos from "../../assets/gorgoryos.jpeg";
import gorgoryosKalie from "../../assets/gorgoryos_kalie.jpeg";
import diyoscoros from "../../assets/diyoscoros.jpeg";
import athnatewos from "../../assets/athnatewos.jpg";
import baslyos from "../../assets/baslyos.jpg";
import egzetne from "../../assets/egzetne.jpg";
import epifanyos from "../../assets/epiphanius.jpg";
import egziene from "../../assets/egziene.jpg";
import splash from "../../assets/splash.jpg";

interface Data {
  title: string;
  name: string;
  imageUrl: string;
  subTitle: string;
  data: string[];
}

const SidePanel = () => {
  const [shouldSpin, setShouldSpin] = useState(false);
  const [expandPanel, setExpandPanel] = useState(true);
  const [active, setActive] = useState(-1);

  const { setSelectedData, setTitle } = dataStore();

  const getTitle = (data: string[]): string[] => {
    return data.map((item) => item.split("-*-")[0]);
  };

  const titles: Data[] = [
    {
      title: "ግእዝ ሥርዓተ ቅዳሴ መግቢያ",
      name: "kdase",
      imageUrl: kdase,
      subTitle: "ሥርዓተ ቅዳሴ ዘደብረ ዓባይ",
      data: getTitle(geezKdaseMegbiya),
    },
    {
      title: "ዕዝል ሥርዓተ ቅዳሴ መግቢያ",
      name: "kdase",
      imageUrl: kdase,
      subTitle: "ሥርዓተ ቅዳሴ ዘደብረ ዓባይ",
      data: getTitle(ezlKdaseMegbiya),
    },
    {
      title: "ግእዝ ዘሐዋርያት",
      name: "kdase",
      imageUrl: hawaryat,
      subTitle: "አኮቴተ ቁርባን ዘአበዊነ ሐዋርያት",
      data: getTitle(geezKdaseHawaryat),
    },
    {
      title: "ዕዝል ዘሐዋርያት",
      name: "kdase",
      imageUrl: hawaryat,
      subTitle: "አኮቴተ ቁርባን ዘአበዊነ ሐዋርያት",
      data: getTitle(ezlKdaseHawaryat),
    },
    {
      title: "ግእዝ ዘእግዚእነ",
      name: "kdase",
      imageUrl: egziene,
      subTitle: "አኮቴተ ቁርባን ዘእግዚእነ ወአምላክነ",
      data: getTitle(geezKdaseEgzi),
    },
    {
      title: "ዕዝል ዘእግዚእነ",
      name: "kdase",
      imageUrl: egziene,
      subTitle: "አኮቴተ ቁርባን ዘእግዚእነ ወአምላክነ",
      data: getTitle(ezlKdaseEgzi),
    },
    {
      title: "ግእዝ ዘእግዝእትነ",
      name: "kdase",
      imageUrl: egzetne,
      subTitle: "አኮቴተ ቁርባን ዘእግዝእትነ",
      data: getTitle(geezKdaseMaryam),
    },
    {
      title: "ዕዝል ዘእግዝእትነ",
      name: "kdase",
      imageUrl: egzetne,
      subTitle: "አኮቴተ ቁርባን ዘእግዝእትነ",
      data: getTitle(ezlKdaseMaryam),
    },
    {
      title: "ግእዝ ዘቅዱስ ዮሐንስ ወልደ ነጎድጓድ",
      name: "kdase",
      imageUrl: weldenegodguad,
      subTitle: "አኮቴተ ቁርባን ዘቅዱስ ዮሐንስ ወልደ ነጎድጓድ",
      data: getTitle(geezKdaseWeldeNegodguad),
    },
    {
      title: "ዕዝል ዘቅዱስ ዮሐንስ ወልደ ነጎድጓድ",
      name: "kdase",
      imageUrl: weldenegodguad,
      subTitle: "አኮቴተ ቁርባን ዘቅዱስ ዮሐንስ ወልደ ነጎድጓድ",
      data: getTitle(ezlKdaseWeldeNegodguad),
    },
    {
      title: "ግእዝ ዘሠለስቱ ምእት",
      name: "kdase",
      imageUrl: selestuMeit,
      subTitle: "አኮቴተ ቁርባን ዘሠለስቱ ምእት",
      data: getTitle(geezKdaseSelestuMiet),
    },
    {
      title: "ዕዝል ዘሠለስቱ ምእት",
      name: "kdase",
      imageUrl: selestuMeit,
      subTitle: "አኮቴተ ቁርባን ዘሠለስቱ ምእት",
      data: getTitle(ezlKdaseSelestuMiet),
    },
    {
      title: "ግእዝ ዘቅዱስ አትናቴዎስ",
      name: "kdase",
      imageUrl: athnatewos,
      subTitle: "አኮቴተ ቁርባን ዘቅዱስ አትናቴዎስ",
      data: getTitle(geezKdaseAtnatewos),
    },
    {
      title: "ዕዝል ዘቅዱስ አትናቴዎስ",
      name: "kdase",
      imageUrl: athnatewos,
      subTitle: "አኮቴተ ቁርባን ዘቅዱስ አትናቴዎስ",
      data: getTitle(ezlKdaseAtnatewos),
    },
    {
      title: "ግእዝ ዘቅዱስ ባስልዮስ",
      name: "kdase",
      imageUrl: baslyos,
      subTitle: "አኮቴተ ቁርባን ዘቅዱስ ባስልዮስ",
      data: getTitle(geezKdaseBaslyos),
    },
    {
      title: "ዕዝል ዘቅዱስ ባስልዮስ",
      name: "kdase",
      imageUrl: baslyos,
      subTitle: "አኮቴተ ቁርባን ዘቅዱስ ባስልዮስ",
      data: getTitle(ezlKdaseBaslyos),
    },
    {
      title: "ግእዝ ዘቅዱስ ጎርጎርዮስ",
      name: "kdase",
      imageUrl: gorgoryos,
      subTitle: "አኮቴተ ቁርባን ዘቅዱስ ጎርጎርዮስ",
      data: getTitle(geezKdaseGorgoryos),
    },
    {
      title: "ዕዝል ዘቅዱስ ጎርጎርዮስ",
      name: "kdase",
      imageUrl: gorgoryos,
      subTitle: "አኮቴተ ቁርባን ዘቅዱስ ጎርጎርዮስ",
      data: getTitle(ezlKdaseGorgoryos),
    },
    {
      title: "ግእዝ ዘቅዱስ ኤጲፋንንዮስ",
      name: "kdase",
      imageUrl: epifanyos,
      subTitle: "አኮቴተ ቁርባን ዘቅዱስ ኤጲፋንንዮስ",
      data: getTitle(geezKdaseEpifanyos),
    },
    {
      title: "ዕዝል ዘቅዱስ ኤጲፋንንዮስ",
      name: "kdase",
      imageUrl: epifanyos,
      subTitle: "አኮቴተ ቁርባን ዘቅዱስ ኤጲፋንንዮስ",
      data: getTitle(ezlKdaseEpifanyos),
    },
    {
      title: "ግእዝ ዘቅዱስ ዮሐንስ አፈ ወርቅ",
      name: "kdase",
      imageUrl: yohansAfewerk,
      subTitle: "አኮቴተ ቁርባን ዘቅዱስ ዮሐንስ አፈ ወርቅ",
      data: getTitle(geezKdaseYohansAfewerk),
    },
    {
      title: "ዕዝል ዘቅዱስ ዮሐንስ አፈ ወርቅ",
      name: "kdase",
      imageUrl: yohansAfewerk,
      subTitle: "አኮቴተ ቁርባን ዘቅዱስ ዮሐንስ አፈ ወርቅ",
      data: getTitle(ezlzKdaseYohansAfewerk),
    },
    {
      title: "ግእዝ ዘቅዱስ ቄርሎስ",
      name: "kdase",
      imageUrl: qerlos,
      subTitle: "አኮቴተ ቁርባን ዘቅዱስ ቄርሎስ",
      data: getTitle(geezKdaseKerlos),
    },
    {
      title: "ዕዝል ዘቅዱስ ቄርሎስ",
      name: "kdase",
      imageUrl: qerlos,
      subTitle: "አኮቴተ ቁርባን ዘቅዱስ ቄርሎስ",
      data: getTitle(ezlKdaseKerlos),
    },
    {
      title: "ግእዝ ዘቅዱስ ያዕቆብ ዘሥሩግ",
      name: "kdase",
      imageUrl: yaekobZesrug,
      subTitle: "አኮቴተ ቁርባን ዘቅዱስ ያዕቆብ ዘሥሩግ",
      data: getTitle(geezKdaseYaekobZeSrug),
    },
    {
      title: "ዕዝል ዘቅዱስ ያዕቆብ ዘሥሩግ",
      name: "kdase",
      imageUrl: yaekobZesrug,
      subTitle: "አኮቴተ ቁርባን ዘቅዱስ ያዕቆብ ዘሥሩግ",
      data: getTitle(ezlKdaseYaekobZeSrug),
    },
    {
      title: "ግእዝ ዘቅዱስ ዲዮስቆሮስ",
      name: "kdase",
      imageUrl: diyoscoros,
      subTitle: "አኮቴተ ቁርባን ዘቅዱስ ዲዮስቆሮስ",
      data: getTitle(geezKdaseDiyoscoros),
    },
    {
      title: "ዕዝል ዘቅዱስ ዲዮስቆሮስ",
      name: "kdase",
      imageUrl: diyoscoros,
      subTitle: "አኮቴተ ቁርባን ዘቅዱስ ዲዮስቆሮስ",
      data: getTitle(ezlKdaseDiyoscoros),
    },
    {
      title: "ግእዝ ዘቅዱስ ጎርጎርዮስ ካልዕ",
      name: "kdase",
      imageUrl: gorgoryosKalie,
      subTitle: "አኮቴተ ቁርባን ዘቅዱስ ጎርጎርዮስ ካልዕ",
      data: getTitle(geezKdaseGorgoryosKalie),
    },
    {
      title: "ዕዝል ዘቅዱስ ጎርጎርዮስ ካልዕ",
      name: "kdase",
      imageUrl: gorgoryosKalie,
      subTitle: "አኮቴተ ቁርባን ዘቅዱስ ጎርጎርዮስ ካልዕ",
      data: getTitle(ezlKdaseGorgoryosKalie),
    },
  ];

  return (
    <VStack
      style={{
        height: "100vh",
        width: expandPanel ? "300px" : "110px",
        minWidth: "110px",
        maxWidth: "300px",
        color: "white",
        display: "flescolumn",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        transition: "width 1.5s",
        gap: 0,
        backgroundColor: "#691c08",
      }}
    >
      <Box
        style={{
          minHeight: expandPanel ? "300px" : "200px",
          width: "100%",
          display: "flex",
          position: "relative",
          transition: "all 1.5s",
        }}
      >
        <Box
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            padding: "10px",
          }}
        >
          <SpinningHamburgerMenu
            size={35}
            color="white"
            should_spin_forward={shouldSpin}
            onClick={() => {
              setShouldSpin(expandPanel);
              setExpandPanel(!expandPanel);
            }}
          />
        </Box>

        <Box
          style={{
            width: "100%",
            height: expandPanel ? "300px" : "110px",
            backgroundColor: "#f7d1a1",
            borderRadius: "50%",
            alignSelf: "flex-end",
            transition: "1.5s",
            overflow: "hidden",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
          }}
          padding={4}
        >
          <Avatar
            padding={expandPanel ? "1px" : "0px"}
            height={expandPanel ? "300px" : "110px"}
            width={expandPanel ? "300" : "110px"}
            src={splash}
          />
        </Box>
      </Box>
      <Box
        style={{
          backgroundColor: "#f7d1a1",
          fontSize: 20,
          overflowX: "hidden",
          paddingLeft: "10px",
          paddingTop: "10px",
          paddingBottom: "10px",
          width: "100%",
          flex: 1,
        }}
      >
        <VStack
          style={{
            overflowX: "hidden",
            overflowY: "scroll",
            gap: 0,
          }}
        >
          {titles?.map((item: Data, index: number) => (
            <PanelList
              onClick={() => {
                if (active != index) {
                  setActive(index);
                }
                setSelectedData(item.data);
                setTitle(item.title);
              }}
              active={active === index}
              style={{
                transition: "all .5s ease-in-out",
              }}
              title={item.title}
              key={index}
              image={item.imageUrl}
              visibleTitle={expandPanel}
            />
          ))}
        </VStack>
      </Box>
    </VStack>
  );
};

export default SidePanel;
