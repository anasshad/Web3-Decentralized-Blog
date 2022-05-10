import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { css } from "@emotion/css";
import { ethers } from "ethers";
import { create } from "ipfs-http-client";

import { contractAddress } from "../config";
import Blog from "../artifacts/contracts/Blog.sol/Blog.json";

const client = create("https://ipfs.infura.io:5001/api/v0");

const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});
