import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ResponsiveAppBar from "./NavBar";

function H1() {
  // let navigate=useNavigate();

  // useEffect(() => {
  //   if (localStorage.getItem("JWT")) {
  //     navigate("/");
  //   }

  // }, []);

  return (
    <>
      <div>
        <ResponsiveAppBar />
        <Box className="mt-3">
          <h2>Welcome to Our University</h2>
          <p style={{ fontWeight: "bolder" }}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus et
            recusandae dolorum nesciunt consectetur ducimus distinctio, hic
            ullam labore! Vitae obcaecati quas atque voluptas reiciendis, vero
            id nemo fugiat autem. Inventore quos, dignissimos adipisci beatae
            saepe possimus dolore excepturi sunt in quia. Eveniet voluptates ad
            minus. Minus corporis soluta quo ex excepturi, voluptatibus ad sequi
            assumenda inventore, praesentium ullam ut? Aspernatur incidunt
            corporis nam libero sint pariatur asperiores est nesciunt maiores
            saepe? Ex laboriosam quisquam ratione consequatur officia pariatur,
            perspiciatis debitis voluptatum necessitatibus repudiandae tempore,
            nisi doloribus ad ipsum vero! Ratione vel et velit porro soluta
            placeat eaque aspernatur, nisi in eum sed suscipit maiores ipsa
            provident aut optio culpa reiciendis! Labore iste possimus eaque,
            quasi ducimus sint dolores soluta. Nulla minima provident quibusdam
            accusantium repellat exercitationem sunt, iste saepe. Repudiandae,
            corrupti aspernatur blanditiis repellat earum odio laborum saepe
            illo quibusdam obcaecati excepturi nihil assumenda, nulla, sapiente
            hic eos quisquam? Rerum, cupiditate quod! Magnam laboriosam nostrum
            expedita, iure aliquid nam error soluta corporis ipsa at dolores
            dolore neque iusto ipsum totam doloremque consectetur ullam quod
            explicabo minima vel aut officia. Ipsam incidunt, distinctio quidem
            natus dolorum culpa vel in vitae ad porro corrupti dolore vero nihil
            adipisci earum molestias rem nobis cupiditate quas. Incidunt odio
            quibusdam ab perspiciatis consequatur accusantium. Dolor aut soluta
            ratione atque error quas accusantium tempora ab illum, commodi
            fugiat nihil corporis facilis et, sapiente, molestiae quae! Modi
            quod eligendi in ducimus corrupti reprehenderit animi aperiam saepe?
            Quasi dolore quaerat perspiciatis culpa quae ex itaque, quisquam
            fuga perferendis sed deleniti accusantium assumenda nihil ullam
            velit repellendus! Recusandae, repudiandae error fugit nulla nobis
            corporis sequi cum quis fuga? Cupiditate, maxime vel! Laborum, aut
            vero facilis earum pariatur tempora, quos non perspiciatis fugit
            consequuntur ea assumenda commodi explicabo, repudiandae neque in.
            Dolores, ipsa quasi. Non error quos repellendus nobis! Consequuntur,
            sapiente! Inventore harum nisi facilis ad neque quis libero,
            possimus deserunt aliquid quae quos, necessitatibus debitis laborum
            quo itaque dignissimos, repellendus quidem earum quam voluptate
            dicta quisquam tempora reprehenderit! Reiciendis esse maxime
            veritatis doloribus facere fugiat, nemo porro. Voluptatem ipsam at
            veniam ipsa, facere obcaecati alias est hic inventore accusamus unde
            suscipit harum nobis. Similique harum consequuntur corrupti sit? Ea
            molestiae sit non labore, adipisci maxime omnis dolorem vitae id
            laboriosam ab tempore. Fugit dolor commodi harum, aliquid Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Error debitis
            modi nostrum, quam aliquid eaque eos exercitationem quaerat, nobis
            quidem temporibus veritatis nisi! A nobis nihil distinctio!
            Excepturi, cum adipisci? Accusamus autem corporis dolorum distinctio
            odio vitae mollitia illo sit error officia minus, inventore,
            provident perspiciatis obcaecati ipsum nemo cupiditate
            exercitationem eaque cumque, esse doloremque fuga expedita quidem?
            Similique, libero?{" "}
          </p>
        </Box>
      </div>
    </>
  );
}

export default H1;
