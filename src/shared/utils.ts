export function slug(text: string): any {
    text = text.toLowerCase()
    text = text.replace(/[^a-z0-9 -]/g, '')
    text = text.replace(/\s+/g, '-')
    text = text.replace(/-+/g, '-')
    return text
}

export function convertPermissions(permissions: any) {
  const permissionsArray = Object.keys(permissions)
  const permissionsArrayMap = permissionsArray.map((chave: any, key: number) => {
    return { name: permissionsArray[key], permission: permissions[chave] };
  });

  return permissionsArrayMap
}
