import {IconCloud} from "../magicui/icon-cloud.tsx";

const slugs = [
    "python",
    "jetbrains",
    "csharp",
    "postman",
    "angular",
    "pandas",
    "mysql",
    "go",
    "cplusplus",
    "typescript",
    "javascript",
    "vmware",
    "virtualbox",
    "tailwindcss",
    "java",
    "php",
    "react",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "jupyter",
    "linux",
    "nestjs",
    "postgresql",
    "nginx",
    "docker",
    "git",
    "github",
    "visualstudiocode",
];

const BgAnimation = () => {
    return (
        <div className="relative flex size-full max-w-2xl items-center justify-center overflow-hidden rounded-lg bg-background  pb-20 pt-8 ">
            <IconCloud iconSlugs={slugs} />
        </div>
    );
}

export default BgAnimation;