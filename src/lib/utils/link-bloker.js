import { goto } from '$app/navigation';

export function preventNav(node) {
  function handleClick(e) {
    e.preventDefault();
    e.stopPropagation();
    
    goto('/error/link');
  }

  node.addEventListener('click', handleClick);

  return {
    destroy() {
      node.removeEventListener('click', handleClick);
    }
  };
}