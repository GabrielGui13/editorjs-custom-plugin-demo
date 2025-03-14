import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { API, BlockTool, BlockToolData } from "@editorjs/editorjs";
import { createRoot } from "react-dom/client";

const teams = [
  {
    id: "550e8400-e29b-41d4-a716-446655440000",
    name: "Equipe de Desenvolvimento",
    slug: "equipe-desenvolvimento",
  },
  {
    id: "6ba7b810-9dad-11d1-80b4-00c04fd430c8",
    name: "Equipe de Marketing",
    slug: "equipe-marketing",
  },
  {
    id: "6ba7b811-9dad-11d1-80b4-00c04fd430c9",
    name: "Equipe de Logística",
    slug: "equipe-logistica",
  },
  {
    id: "6ba7b812-9dad-11d1-80b4-00c04fd430c0",
    name: "Equipe de Vendas",
    slug: "equipe-vendas",
  },
  {
    id: "6ba7b813-9dad-11d1-80b4-00c04fd430c1",
    name: "Equipe de Suporte",
    slug: "equipe-suporte",
  },
];

type Team = {
  id: string;
  name: string;
  slug: string;
}

interface TeamSelectorData extends BlockToolData {
  team: Team
}

interface TeamSelectorParams {
  data: TeamSelectorData;
  api: API;
}

export class TeamSelector implements BlockTool {
  private data: TeamSelectorData;
  private api: API;
  private wrapper: HTMLElement | null = null;
  
  constructor({ data, api }: TeamSelectorParams) {    
    this.data = data;
    this.api = api;
  }

  render() {
    const previousSelectedTeam = this.data.team && teams.find(team => team.id === this.data.team.id);

    const handleTeamChange = (value: string) => {
      this.data.selectedTeam = value;
    };

    const Selector = () => (
      <Select onValueChange={handleTeamChange} value={previousSelectedTeam ? previousSelectedTeam.id : undefined}>
        <SelectTrigger className="border-0 outline-none shadow-none appearance-none -translate-y-1.25 cursor-pointer text-blue-900 underline font-bold h-0.5 pl-0">
          <SelectValue placeholder="Selecione a equipe" className="h-0 m-0 bg-none outline-none" />
        </SelectTrigger>
        <SelectContent>
          {teams.map(team => (
            <SelectItem key={team.id} value={team.id} className="cursor-pointer appearance-none bg-none">{team.name}</SelectItem>
          ))}
        </SelectContent>
      </Select>
    )

    this.wrapper = document.createElement('div');

    const root = createRoot(this.wrapper);
    root.render(<Selector />);

    return this.wrapper;
  }

  save(): TeamSelectorData {
    const findTeam: Team = teams.find(team => team.id === this.data.selectedTeam) as Team;
    
    return {
      team: findTeam,
    };
  }

  validate(blockData: BlockToolData): boolean {
    const checkTeam = teams.find(team => team.id === blockData.team.id);

    return Boolean(checkTeam)
  }

  static get toolbox() {
    return {
      title: 'Equipes',
      icon: '<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 7.16C17.94 7.15 17.87 7.15 17.81 7.16C16.43 7.11 15.33 5.98 15.33 4.58C15.33 3.15 16.48 2 17.91 2C19.34 2 20.49 3.16 20.49 4.58C20.48 5.98 19.38 7.11 18 7.16Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M16.9699 14.44C18.3399 14.67 19.8499 14.43 20.9099 13.72C22.3199 12.78 22.3199 11.24 20.9099 10.3C19.8399 9.59004 18.3099 9.35003 16.9399 9.59003" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M5.96998 7.16C6.02998 7.15 6.09998 7.15 6.15998 7.16C7.53998 7.11 8.63998 5.98 8.63998 4.58C8.63998 3.15 7.48998 2 6.05998 2C4.62998 2 3.47998 3.16 3.47998 4.58C3.48998 5.98 4.58998 7.11 5.96998 7.16Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M6.99994 14.44C5.62994 14.67 4.11994 14.43 3.05994 13.72C1.64994 12.78 1.64994 11.24 3.05994 10.3C4.12994 9.59004 5.65994 9.35003 7.02994 9.59003" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 14.63C11.94 14.62 11.87 14.62 11.81 14.63C10.43 14.58 9.32996 13.45 9.32996 12.05C9.32996 10.62 10.48 9.46997 11.91 9.46997C13.34 9.46997 14.49 10.63 14.49 12.05C14.48 13.45 13.38 14.59 12 14.63Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M9.08997 17.78C7.67997 18.72 7.67997 20.26 9.08997 21.2C10.69 22.27 13.31 22.27 14.91 21.2C16.32 20.26 16.32 18.72 14.91 17.78C13.32 16.72 10.69 16.72 9.08997 17.78Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>'
    }
  }
}

    // this.wrapper = document.createElement('div');

    // const selector = document.createElement('select');
    // selector.name = 'teams';
    // selector.id = 'teams';
    // selector.className = ""

    // const options = teams.map(team => {
    //   const option = document.createElement('option');
    //   option.setAttribute('value', team.id);
    //   option.textContent = team.name;

    //   return option;
    // })

    // selector.append(...options);
    // this.wrapper.append(selector);

    // const customJSXElement = (
    //   <>
    //     <span>@</span>
    //     <select name="teams" id="teams">
    //       {teams.map(team => (
    //         <option key={team.id} value={team.id}>{team.name}</option>
    //       ))}
    //     </select>
    //   </>
    // )

    // this.wrapper.innerHTML = renderToStaticMarkup(newJSXElement);