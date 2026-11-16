import { useRef, useState, type PointerEvent } from 'react';
import { ArrowUpRight, Github, LockKeyhole } from 'lucide-react';
import type { Project } from '../data/portfolio';
import ProjectPreview from './ProjectPreview';
import Reveal from './Reveal';
export default function ProjectCard({ project, index }: {
    project: Project;
    index: number;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const [tilt, setTilt] = useState({ x: 0, y: 0 });
    function handlePointerMove(e: PointerEvent<HTMLDivElement>) {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || window.matchMedia('(pointer: coarse)').matches)
            return;
        const rect = ref.current?.getBoundingClientRect();
        if (!rect)
            return;
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        setTilt({ x: -y * 5, y: x * 5 });
    }
    return <Reveal delay={index * 0.09} className="project-reveal">
        <article ref={ref} className="project-card" onPointerMove={handlePointerMove} onPointerLeave={() => setTilt({ x: 0, y: 0 })} style={{ transform: `perspective(1100px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}>
          <ProjectPreview kind={project.preview}/>
          <div className="project-body">
            <div className="project-kicker">
              <span>
                {project.number}
                / FEATURED PROJECT
              </span>
              <span className="project-category">
                {project.category}
              </span>
            </div>
            <h3>
              {project.title}
            </h3>
            <p>
              {project.description}
            </p>
            <div className="tags">
              {project.stack.map(tag => <span key={tag}>{tag}</span>)}
            </div>
            <div className="project-actions">
              <a className={`project-action ${!project.demoUrl ? 'action-disabled' : ''}`} href={project.demoUrl || undefined} target={project.demoUrl ? '_blank' : undefined} rel="noopener noreferrer" aria-disabled={!project.demoUrl} title={!project.demoUrl ? 'Live demo URL not provided yet' : `View ${project.title} live demo`} onClick={e => { if (!project.demoUrl)
        e.preventDefault(); }}>
                Live Demo
                {project.demoUrl ? <ArrowUpRight size={15}/> : <LockKeyhole size={13}/>}
              </a>
              <a className={`project-action subtle ${!project.githubUrl ? 'action-disabled' : ''}`} href={project.githubUrl || undefined} target={project.githubUrl ? '_blank' : undefined} rel="noopener noreferrer" aria-disabled={!project.githubUrl} title={!project.githubUrl ? 'Repository URL not provided yet' : `View ${project.title} source code`} onClick={e => { if (!project.githubUrl)
        e.preventDefault(); }}>
                <Github size={15}/>
                GitHub
                {project.githubUrl ? <ArrowUpRight size={14}/> : <LockKeyhole size={13}/>}
              </a>
            </div>
          </div>
        </article>
      </Reveal>;
}
