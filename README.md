# MSDeploy Action

This action deploys a web deploy package (zip) via the msdeploy command.

## Requirements

It must be run on Windows.

## Inputs

### `zip`

**Required** The path of the `zip` file to build.

### `site`

**Required** The name of the site as it's defined in IIS

### `server`

**Required** The domain or IP address of the server to connect to

### `user`

**Required** The msdeploy username for the remote server (basic auth)

### `password`

**Required** The msdeploy password for the remote server (basic auth)

## Example usage

```yaml
- name: Deploy Package
      uses: ryanvz/msdeploy-action@master
      with:
        zip: ${{ steps.build.outputs.package }}
        site: example.com
        server: test.example.com
        user: username
        password: ${{ secrets.MSDEPLOY_PASSWORD }}
```