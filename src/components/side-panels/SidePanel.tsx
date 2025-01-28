import { useState } from "react";

import { Avatar, Box, Image, VStack } from "@chakra-ui/react";

import dataStore from "../../store/DataStore";
import PanelList from "./PanelList";
import SpinningMenu from "./SpiningMenu";

import athnatewos from "../../assets/athnatewos.jpg";
import baslyos from "../../assets/baslyos.jpg";
import diyoscoros from "../../assets/diyoscoros.jpeg";
import egzetne from "../../assets/egzetne.jpg";
import egziene from "../../assets/egziene.jpg";
import epifanyos from "../../assets/epiphanius.jpg";
import gorgoryos from "../../assets/gorgoryos.jpeg";
import gorgoryosKalie from "../../assets/gorgoryos_kalie.jpeg";
import hawaryat from "../../assets/hawaryat.jpg";
import kdase from "../../assets/kdase.jpg";
import qerlos from "../../assets/qerlos.jpeg";
import selestuMeit from "../../assets/selestu_meit.jpeg";
import splash from "../../assets/splash.jpg";
import weldenegodguad from "../../assets/weldenegodguad.jpeg";
import yaekobZesrug from "../../assets/yaekob_zesrug.jpeg";
import yohansAfewerk from "../../assets/yohans_afewerk.jpeg";
import {
  EzlKdaseAtnatewos,
  EzlKdaseBaslyos,
  EzlKdaseDiyoscoros,
  EzlKdaseEgzi,
  EzlKdaseEpifanyos,
  EzlKdaseGorgoryos,
  EzlKdaseGorgoryosKalie,
  EzlKdaseHawaryat,
  EzlKdaseKerlos,
  EzlKdaseMaryam,
  EzlKdaseMegbiya,
  EzlKdaseSelestuMiet,
  EzlKdaseWeldeNegodguad,
  EzlKdaseYaekobZeSrug,
  EzlKdaseYohansAfewerk,
  GeezKdaseAtnatewos,
  GeezKdaseBaslyos,
  GeezKdaseDiyoscoros,
  GeezKdaseEgzi,
  GeezKdaseEpifanyos,
  GeezKdaseGorgoryos,
  GeezKdaseGorgoryosKalie,
  GeezKdaseHawaryat,
  GeezKdaseKerlos,
  GeezKdaseMaryam,
  GeezKdaseMegbiya,
  GeezKdaseSelestuMiet,
  GeezKdaseWeldeNegodguad,
  GeezKdaseYaekobZeSrug,
  GeezKdaseYohansAfewerk,
} from "../../store/kdase_classes";

interface Data {
  title: string;
  name: string;
  imageUrl: string;
  subTitle: string;
  data: string[];
  pdf: string;
}

const SidePanel = () => {
  const [shouldSpin, setShouldSpin] = useState(false);
  // const [expandPanel, setExpandPanel] = useState(true);
  const [active, setActive] = useState(-1);

  const {
    setSelectedData,
    setTitle,
    setZemaTitle,
    setPdf,
    setExpandPanel,
    expandPanel,
  } = dataStore();

  const getTitle = (data: string[]): string[] => {
    return data;
  };

  const getPdf = (data: { pdf: string }): string => {
    return data.pdf;
  };

  const titles: Data[] = [
    {
      title: "ግእዝ ሥርዓተ ቅዳሴ መግቢያ",
      name: "kdase",
      imageUrl: kdase,
      subTitle: "ሥርዓተ ቅዳሴ ዘደብረ ዓባይ",
      data: getTitle(GeezKdaseMegbiya.data),
      pdf: getPdf(GeezKdaseMegbiya),
    },
    {
      title: "ዕዝል ሥርዓተ ቅዳሴ መግቢያ",
      name: "kdase",
      imageUrl: kdase,
      subTitle: "ሥርዓተ ቅዳሴ ዘደብረ ዓባይ",
      data: getTitle(EzlKdaseMegbiya.data),
      pdf: getPdf(EzlKdaseMegbiya),
    },
    {
      title: "ግእዝ ዘሐዋርያት",
      name: "kdase",
      imageUrl: hawaryat,
      subTitle: "አኮቴተ ቁርባን ዘአበዊነ ሐዋርያት",
      data: getTitle(GeezKdaseHawaryat.data),
      pdf: getPdf(GeezKdaseHawaryat),
    },
    {
      title: "ዕዝል ዘሐዋርያት",
      name: "kdase",
      imageUrl: hawaryat,
      subTitle: "አኮቴተ ቁርባን ዘአበዊነ ሐዋርያት",
      data: getTitle(EzlKdaseHawaryat.data),
      pdf: getPdf(EzlKdaseHawaryat),
    },
    {
      title: "ግእዝ ዘእግዚእነ",
      name: "kdase",
      imageUrl: egziene,
      subTitle: "አኮቴተ ቁርባን ዘእግዚእነ ወአምላክነ",
      data: getTitle(GeezKdaseEgzi.data),
      pdf: getPdf(GeezKdaseEgzi),
    },
    {
      title: "ዕዝል ዘእግዚእነ",
      name: "kdase",
      imageUrl: egziene,
      subTitle: "አኮቴተ ቁርባን ዘእግዚእነ ወአምላክነ",
      data: getTitle(EzlKdaseEgzi.data),
      pdf: getPdf(EzlKdaseEgzi),
    },
    {
      title: "ግእዝ ዘእግዝእትነ",
      name: "kdase",
      imageUrl: egzetne,
      subTitle: "አኮቴተ ቁርባን ዘእግዝእትነ",
      data: getTitle(GeezKdaseMaryam.data),
      pdf: getPdf(GeezKdaseMaryam),
    },
    {
      title: "ዕዝል ዘእግዝእትነ",
      name: "kdase",
      imageUrl: egzetne,
      subTitle: "አኮቴተ ቁርባን ዘእግዝእትነ",
      data: getTitle(EzlKdaseMaryam.data),
      pdf: getPdf(EzlKdaseMaryam),
    },
    {
      title: "ግእዝ ዘቅዱስ ዮሐንስ ወልደ ነጎድጓድ",
      name: "kdase",
      imageUrl: weldenegodguad,
      subTitle: "አኮቴተ ቁርባን ዘቅዱስ ዮሐንስ ወልደ ነጎድጓድ",
      data: getTitle(GeezKdaseWeldeNegodguad.data),
      pdf: getPdf(GeezKdaseWeldeNegodguad),
    },
    {
      title: "ዕዝል ዘቅዱስ ዮሐንስ ወልደ ነጎድጓድ",
      name: "kdase",
      imageUrl: weldenegodguad,
      subTitle: "አኮቴተ ቁርባን ዘቅዱስ ዮሐንስ ወልደ ነጎድጓድ",
      data: getTitle(EzlKdaseWeldeNegodguad.data),
      pdf: getPdf(EzlKdaseWeldeNegodguad),
    },
    {
      title: "ግእዝ ዘሠለስቱ ምእት",
      name: "kdase",
      imageUrl: selestuMeit,
      subTitle: "አኮቴተ ቁርባን ዘሠለስቱ ምእት",
      data: getTitle(GeezKdaseSelestuMiet.data),
      pdf: getPdf(GeezKdaseSelestuMiet),
    },
    {
      title: "ዕዝል ዘሠለስቱ ምእት",
      name: "kdase",
      imageUrl: selestuMeit,
      subTitle: "አኮቴተ ቁርባን ዘሠለስቱ ምእት",
      data: getTitle(EzlKdaseSelestuMiet.data),
      pdf: getPdf(EzlKdaseSelestuMiet),
    },
    {
      title: "ግእዝ ዘቅዱስ አትናቴዎስ",
      name: "kdase",
      imageUrl: athnatewos,
      subTitle: "አኮቴተ ቁርባን ዘቅዱስ አትናቴዎስ",
      data: getTitle(GeezKdaseAtnatewos.data),
      pdf: getPdf(GeezKdaseAtnatewos),
    },
    {
      title: "ዕዝል ዘቅዱስ አትናቴዎስ",
      name: "kdase",
      imageUrl: athnatewos,
      subTitle: "አኮቴተ ቁርባን ዘቅዱስ አትናቴዎስ",
      data: getTitle(EzlKdaseAtnatewos.data),
      pdf: getPdf(EzlKdaseAtnatewos),
    },
    {
      title: "ግእዝ ዘቅዱስ ባስልዮስ",
      name: "kdase",
      imageUrl: baslyos,
      subTitle: "አኮቴተ ቁርባን ዘቅዱስ ባስልዮስ",
      data: getTitle(GeezKdaseBaslyos.data),
      pdf: getPdf(GeezKdaseBaslyos),
    },
    {
      title: "ዕዝል ዘቅዱስ ባስልዮስ",
      name: "kdase",
      imageUrl: baslyos,
      subTitle: "አኮቴተ ቁርባን ዘቅዱስ ባስልዮስ",
      data: getTitle(EzlKdaseBaslyos.data),
      pdf: getPdf(EzlKdaseBaslyos),
    },
    {
      title: "ግእዝ ዘቅዱስ ጎርጎርዮስ",
      name: "kdase",
      imageUrl: gorgoryos,
      subTitle: "አኮቴተ ቁርባን ዘቅዱስ ጎርጎርዮስ",
      data: getTitle(GeezKdaseGorgoryos.data),
      pdf: getPdf(GeezKdaseGorgoryos),
    },
    {
      title: "ዕዝል ዘቅዱስ ጎርጎርዮስ",
      name: "kdase",
      imageUrl: gorgoryos,
      subTitle: "አኮቴተ ቁርባን ዘቅዱስ ጎርጎርዮስ",
      data: getTitle(EzlKdaseGorgoryos.data),
      pdf: getPdf(EzlKdaseGorgoryos),
    },
    {
      title: "ግእዝ ዘቅዱስ ኤጲፋንንዮስ",
      name: "kdase",
      imageUrl: epifanyos,
      subTitle: "አኮቴተ ቁርባን ዘቅዱስ ኤጲፋንንዮስ",
      data: getTitle(GeezKdaseEpifanyos.data),
      pdf: getPdf(GeezKdaseEpifanyos),
    },
    {
      title: "ዕዝል ዘቅዱስ ኤጲፋንንዮስ",
      name: "kdase",
      imageUrl: epifanyos,
      subTitle: "አኮቴተ ቁርባን ዘቅዱስ ኤጲፋንንዮስ",
      data: getTitle(EzlKdaseEpifanyos.data),
      pdf: getPdf(EzlKdaseEpifanyos),
    },
    {
      title: "ግእዝ ዘቅዱስ ዮሐንስ አፈ ወርቅ",
      name: "kdase",
      imageUrl: yohansAfewerk,
      subTitle: "አኮቴተ ቁርባን ዘቅዱስ ዮሐንስ አፈ ወርቅ",
      data: getTitle(GeezKdaseYohansAfewerk.data),
      pdf: getPdf(GeezKdaseYohansAfewerk),
    },
    {
      title: "ዕዝል ዘቅዱስ ዮሐንስ አፈ ወርቅ",
      name: "kdase",
      imageUrl: yohansAfewerk,
      subTitle: "አኮቴተ ቁርባን ዘቅዱስ ዮሐንስ አፈ ወርቅ",
      data: getTitle(EzlKdaseYohansAfewerk.data),
      pdf: getPdf(EzlKdaseYohansAfewerk),
    },
    {
      title: "ግእዝ ዘቅዱስ ቄርሎስ",
      name: "kdase",
      imageUrl: qerlos,
      subTitle: "አኮቴተ ቁርባን ዘቅዱስ ቄርሎስ",
      data: getTitle(GeezKdaseKerlos.data),
      pdf: getPdf(GeezKdaseKerlos),
    },
    {
      title: "ዕዝል ዘቅዱስ ቄርሎስ",
      name: "kdase",
      imageUrl: qerlos,
      subTitle: "አኮቴተ ቁርባን ዘቅዱስ ቄርሎስ",
      data: getTitle(EzlKdaseKerlos.data),
      pdf: getPdf(EzlKdaseKerlos),
    },
    {
      title: "ግእዝ ዘቅዱስ ያዕቆብ ዘሥሩግ",
      name: "kdase",
      imageUrl: yaekobZesrug,
      subTitle: "አኮቴተ ቁርባን ዘቅዱስ ያዕቆብ ዘሥሩግ",
      data: getTitle(GeezKdaseYaekobZeSrug.data),
      pdf: getPdf(GeezKdaseYaekobZeSrug),
    },
    {
      title: "ዕዝል ዘቅዱስ ያዕቆብ ዘሥሩግ",
      name: "kdase",
      imageUrl: yaekobZesrug,
      subTitle: "አኮቴተ ቁርባን ዘቅዱስ ያዕቆብ ዘሥሩግ",
      data: getTitle(EzlKdaseYaekobZeSrug.data),
      pdf: getPdf(EzlKdaseYaekobZeSrug),
    },
    {
      title: "ግእዝ ዘቅዱስ ዲዮስቆሮስ",
      name: "kdase",
      imageUrl: diyoscoros,
      subTitle: "አኮቴተ ቁርባን ዘቅዱስ ዲዮስቆሮስ",
      data: getTitle(GeezKdaseDiyoscoros.data),
      pdf: getPdf(GeezKdaseDiyoscoros),
    },
    {
      title: "ዕዝል ዘቅዱስ ዲዮስቆሮስ",
      name: "kdase",
      imageUrl: diyoscoros,
      subTitle: "አኮቴተ ቁርባን ዘቅዱስ ዲዮስቆሮስ",
      data: getTitle(EzlKdaseDiyoscoros.data),
      pdf: getPdf(EzlKdaseDiyoscoros),
    },
    {
      title: "ግእዝ ዘቅዱስ ጎርጎርዮስ ካልዕ",
      name: "kdase",
      imageUrl: gorgoryosKalie,
      subTitle: "አኮቴተ ቁርባን ዘቅዱስ ጎርጎርዮስ ካልዕ",
      data: getTitle(GeezKdaseGorgoryosKalie.data),
      pdf: getPdf(GeezKdaseGorgoryosKalie),
    },
    {
      title: "ዕዝል ዘቅዱስ ጎርጎርዮስ ካልዕ",
      name: "kdase",
      imageUrl: gorgoryosKalie,
      subTitle: "አኮቴተ ቁርባን ዘቅዱስ ጎርጎርዮስ ካልዕ",
      data: getTitle(EzlKdaseGorgoryosKalie.data),
      pdf: getPdf(EzlKdaseGorgoryosKalie),
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
          <SpinningMenu
            size={35}
            color={expandPanel ? "#691c08" : "white"}
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
            // borderTopRightRadius: "30%",
            borderBottomRightRadius: "35%",
            borderBottomLeftRadius: "35%",
            borderTopLeftRadius: expandPanel ? 0 : "20%",
            alignSelf: "flex-end",
            transition: "1s",
            overflow: "hidden",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
          }}
        >
          {expandPanel ? (
            <Image
              // padding={expandPanel ? "0px" : "0px"}
              height={"80%"}
              // width={expandPanel ? "320px" : "110px"}
              src={splash}
              borderRadius={"15%"}
              bgSize={"contain"}
            />
          ) : (
            <Avatar size={"xl"} src={splash} />
          )}
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
                  setSelectedData(item.data);
                  setTitle(item.title);
                  setZemaTitle(item.subTitle);
                  setPdf(item.pdf);
                }
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
